$targetDir = "d:\Webdev\arthasee\public\assets"
if (!(Test-Path $targetDir)) {
    New-Item -ItemType Directory -Force -Path $targetDir
}

$assets = @(
    @{ Name = "logo.png"; Url = "http://localhost:3845/assets/e15874c83da0e544d9e1c3c8cdb677e0bfd25054.png" },
    @{ Name = "hero-bg.png"; Url = "http://localhost:3845/assets/ef5ddc4b999983f2219863da9f0623098e3a7e45.png" },
    @{ Name = "service-card-1.png"; Url = "http://localhost:3845/assets/cc694dfb24d4bbaa70e8ca66c499a78ea28a2690.png" },
    @{ Name = "service-card-2.png"; Url = "http://localhost:3845/assets/42199c35d156d4695b2ed902deaed59dca645f1c.png" },
    @{ Name = "service-card-3.png"; Url = "http://localhost:3845/assets/515a7eec020c6f617e6c96fb695b892caaea351a.png" },
    @{ Name = "feature-img-main.png"; Url = "http://localhost:3845/assets/8f921fa53094c01cc7dcad1da9e6a1d812c6f553.png" },
    @{ Name = "about-mechanic.png"; Url = "http://localhost:3845/assets/047ca56654d12e3b9eb9cac71e1c3ae7a0ad53d9.png" },
    @{ Name = "cta-bg.png"; Url = "http://localhost:3845/assets/8bb79c980d3eec52ba76016450910763048839cc.png" },
    @{ Name = "testimonial-author-1.png"; Url = "http://localhost:3845/assets/77d7c2aa5af2b01065ce472ea457d75ff90cde9a.png" },
    @{ Name = "testimonial-author-2.png"; Url = "http://localhost:3845/assets/c5335e3a36c8ad116270d023e0c101b8dead9808.png" },
    @{ Name = "testimonial-author-3.png"; Url = "http://localhost:3845/assets/7548ca1541b59be41aff18944cf7749d7101aa8d.png" },
    @{ Name = "pricing-car.png"; Url = "http://localhost:3845/assets/5c86e3e6fbe5bc45c4e409a270aa5455b1050a1d.png" },
    @{ Name = "stats-subtract-bg.svg"; Url = "http://localhost:3845/assets/cab96f21e98237bd08dbb3dcc557cb2fd8f0f217.svg" },
    @{ Name = "feature-img-overlay.svg"; Url = "http://localhost:3845/assets/81c0921d5fbecce39f36059bab60bd75241eff54.svg" },
    @{ Name = "about-after-shape.svg"; Url = "http://localhost:3845/assets/6410a29c8157750d407e7ba523c547a0e63d11d8.svg" }
)

foreach ($asset in $assets) {
    $dest = Join-Path $targetDir $asset.Name
    Invoke-WebRequest -Uri $asset.Url -OutFile $dest
    Write-Host "Downloaded $($asset.Name)"
}
