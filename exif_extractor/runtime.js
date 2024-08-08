window.onload = function() {

    document.getElementById("file-input").onchange = function(e) {
        var file = e.target.files[0]
        if (file && file.name) {
            EXIF.getData(file, function() {
                var exifData = EXIF.pretty(this);
                if (exifData) {
                    var data = document.createElement('pre');
                    data.innerHTML = exifData;
                    document.getElementById("exifInformation").appendChild(data)
                } else {
                    document.getElementById("exifInformation").innerHTML = "No EXIF data found in the image"
                }
            });
        }
    }
    
    document.getElementById('searchImg').onclick = function() {
        input = document.getElementById('imgSrc'),
        img = document.createElement('img');
    
        img.src = input.value;
        document.getElementById('targetImg').appendChild(img);

        EXIF.getData(function() {
            var exifData = EXIF.pretty(this);
            if (exifData) {
                var data = document.createElement('pre');
                data.innerHTML = exifData;
                document.getElementById("exifInformation").appendChild(data)
            } else {
                document.getElementById("exifInformation").innerHTML = "No EXIF data found in the image"
            }
        });
    }

}