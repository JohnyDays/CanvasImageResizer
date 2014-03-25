//THIS LIBRARY CAN ONLY DO ITS JOB IF THE IMAGES YOU ARE RESIZING COME WITH CROSS ORIGIN RESOURCE SHARING ENABLED OR ARE IN THE SAME DOMAIN.
CanvasImageResizer = new CanvasImageResizer()

function CanvasImageResizer() {
    this.canvas = document.createElement('canvas');
    this.canResize = function canResize() {
        return !!(canvas.getContext && canvas.getContext('2d'));
    }
    this.resizeImageFromSource = function resizeImageFromSource(source, width, height, callback) {
        var dataUrl;
        var canvas = this.canvas;
        canvas.width = width
        canvas.height = height
        context = canvas.getContext('2d')
        imageObject = new Image();
        imageObject.src = source
        imageObject.onload = function() {
            context.drawImage(imageObject, 0, 0, width, height)
            callback(canvas.toDataURL(), source)
        }

    }
    this.resizeImageFromObject = function resizeImageFromObject(imageObject, width, height, callback) {
        var dataUrl;
        var canvas = this.canvas;
        canvas.width = width
        canvas.height = height
        context = canvas.getContext('2d')
        if (imageObject.complete) {
            context.drawImage(imageObject, 0, 0, width, height)
            callback(canvas.toDataURL(), source)
        } else {
            imageObject.onload = function() {
                context.drawImage(imageObject, 0, 0, width, height)
                callback(canvas.toDataURL(), source)
            }
        }
        callback(dataUrl, imageObject)
    }
}