$ImageFolder = Join-Path $PSScriptRoot "..\img\portfolio"

Get-ChildItem $ImageFolder -File | Where-Object {
    $_.Extension -match '^\.(png|jpg|jpeg)$'
} | ForEach-Object {

    $source = $_
    $webp = Join-Path $source.DirectoryName ($source.BaseName + ".webp")

    if (
        -not (Test-Path $webp) -or
        $source.LastWriteTime -gt (Get-Item $webp).LastWriteTime
    ) {
        Write-Host "Converting $($source.Name)..."

        sharp -i $source.FullName `
            -o $webp `
            --format webp `
            --quality 90
    }
    else {
        Write-Host "Skipping $($source.Name) - WebP is already up to date"
    }
}

Write-Host ""
Write-Host "Image conversion complete."
