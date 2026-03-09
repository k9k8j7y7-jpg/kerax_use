param(
    [string]$FtpServer = "ftp://jimall.jpg3.kr",
    [string]$Username = "jimall",
    [string]$Password = "",
    [string]$RemoteDir = "/detail/kera_manual",
    [string]$LocalDir = "C:\Users\k9k8j\Downloads\kerax_use\dist"
)

function Create-FtpDirectory ($path) {
    try {
        $request = [System.Net.FtpWebRequest]::Create($path)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::MakeDirectory
        $request.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $response = $request.GetResponse()
        Write-Host "Created dir $path"
        $response.Close()
    }
    catch {
        # If it already exists, this block handles the exception silently.
    }
}

function Upload-FtpFile ($localFilePath, $remoteFilePath) {
    try {
        $request = [System.Net.FtpWebRequest]::Create($remoteFilePath)
        $request.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
        $request.Credentials = New-Object System.Net.NetworkCredential($Username, $Password)
        $request.UseBinary = $true
        $request.KeepAlive = $false
        
        $content = [System.IO.File]::ReadAllBytes($localFilePath)
        $request.ContentLength = $content.Length
        
        $rs = $request.GetRequestStream()
        $rs.Write($content, 0, $content.Length)
        $rs.Close()
        
        $response = $request.GetResponse()
        Write-Host "Uploaded $($localFilePath | Split-Path -Leaf)"
        $response.Close()
    }
    catch {
        Write-Host "Failed to upload $($localFilePath) to $($remoteFilePath): $_"
    }
}

Write-Host "Starting FTP Upload to jimall.jpg3.kr..."

# Ensure the base directories exist
Create-FtpDirectory "$FtpServer/detail"
Create-FtpDirectory "$FtpServer/detail/kera_manual"

$files = Get-ChildItem -Path $LocalDir -Recurse
foreach ($item in $files) {
    $relativePath = $item.FullName.Substring($LocalDir.Length).Replace('\', '/')
    $remotePath = "$FtpServer$RemoteDir$relativePath"
    
    if ($item.PSIsContainer) {
        Create-FtpDirectory $remotePath
    }
    else {
        Upload-FtpFile $item.FullName $remotePath
    }
}

Write-Host "FTP Upload Completely Finished!"
