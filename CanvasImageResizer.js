//THIS LIBRARY CAN ONLY DO ITS JOB IF THE IMAGES YOU ARE RESIZING COME WITH CROSS ORIGIN RESOURCE SHARING ENABLED OR ARE IN THE SAME DOMAIN.
CanvasImageResizer = new CanvasImageResizer()

function CanvasImageResizer() {
    this.canvas = document.createElement('canvas');
    this.canResize = function canResize() {
        return !!(this.canvas.getContext && this.canvas.getContext('2d'));
    }
    this.resizeImageFromSource = function resizeImageFromSource(source, width, height, callback) {
        var c = this.canvas
        c.width = width
        c.height = height
        imageObject = new Image();
        imageObject.src = source
        imageObject.onload = function() {
            c.getContext('2d').clearRect(0, 0, c.width, c.height)
            c.getContext('2d').drawImage(this, 0, 0, parseInt(width), parseInt(height))
            callback(c.toDataURL(), source)
        }

    }
    this.resizeImageFromObject = function resizeImageFromObject(imageObject, width, height, callback) {
        var c = this.canvas;
        c.width = width
        c.height = height
        if (imageObject.complete) {
            c.getContext('2d').clearRect(0, 0, c.width, c.height)
            c.getContext('2d').drawImage(imageObject, 0, 0, width, height)
            callback(c.toDataURL(), imageObject)
        } else {
            imageObject.onload = function() {
                c.getContext('2d').clearRect(0, 0, c.width, c.height)
                c.getContext('2d').drawImage(imageObject, 0, 0, width, height)
                callback(c.toDataURL(), imageObject)
            }
        }
    }
}