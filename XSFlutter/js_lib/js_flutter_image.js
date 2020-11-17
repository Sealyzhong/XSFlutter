/*
 * @Author: SealyZhong
 * @CreateDate: 2020/11/10
 * @ModifyDate: 2020/11/11
 * @Description: Image Class
 */

let { FlutterWidget } = require("./js_flutter_basic_types.js");

//-------------- A -----------------
//****** AssetImage ******
class AssetImage extends FlutterWidget {
  constructor({ assetName, bundle, packageJS } = {}) {
    super();

    this.assetName = assetName;
    this.bundle = bundle;
    this.package = packageJS;
  }
}
AssetImage.new = function({ assetName, bundle, packageJS } = {}) {
  return new AssetImage({
      assetName:assetName,
      bundle:bundle,
      packageJS:packageJS,
  });
};

//-------------- D -----------------
//****** DecorationImage ******
class DecorationImage extends FlutterWidget {
    constructor({ image, colorFilter, fit, alignment, centerSlice, repeat, matchTextDirection } = {}) {
        super();

        this.image = image;
        this.colorFilter = colorFilter;
        this.fit = fit;
        this.alignment = alignment;
        this.centerSlice = centerSlice;
        this.repeat = repeat;
        this.matchTextDirection = matchTextDirection;
    }
}
DecorationImage.new = function({ image, colorFilter, fit, alignment, centerSlice, repeat, matchTextDirection } = {}) {
    return new DecorationImage({
        image:image,
        colorFilter:colorFilter,
        fit:fit,
        alignment:alignment,
        centerSlice:centerSlice,
        repeat:repeat,
        matchTextDirection:matchTextDirection,
    });
};


//-------------- E -----------------
//****** ExactAssetImage ******
class ExactAssetImage extends FlutterWidget {
  constructor({ assetName, scale, bundle, packageJS } = {}) {
    super();
    this.assetName = assetName;
    this.scale = scale;
    this.bundle = bundle;
    this.package = packageJS;
  }
}
ExactAssetImage.new = function({ assetName, scale, bundle, packageJS } = {}) {
  return new ExactAssetImage({
      assetName:assetName,
      scale:scale,
      bundle:bundle,
      packageJS:packageJS,

  });
};

//-------------- F -----------------
//****** FileImage ******
class FileImage extends FlutterWidget {
  constructor({ file, scale } = {}) {
    super();

    this.file = file;
    this.scale = scale;
  }
}
FileImage.new = function({ file, scale } = {}) {
  return new FileImage({
      file:file,
      scale:scale,
  });
};

//-------------- I -----------------
//****** Image ******
class Image extends FlutterWidget {
    constructor({key, image, semanticLabel, excludeFromSemantics, width, height, color,
                    colorBlendMode, fit, alignment, repeat, centerSlice, matchTextDirection, gaplessPlayback, filterQuality} = {}) {
        super();

        this.key = key;
        this.image = image;
        this.semanticLabel = semanticLabel;
        this.excludeFromSemantics = excludeFromSemantics;
        this.width = width;
        this.height = height;
        this.color = color;
        this.colorBlendMode = colorBlendMode;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.centerSlice = centerSlice;
        this.matchTextDirection = matchTextDirection;
        this.gaplessPlayback = gaplessPlayback;
        this.filterQuality = filterQuality;
    }
}
Image.new = function({key, image, semanticLabel, excludeFromSemantics, width, height, color, colorBlendMode, fit, alignment, repeat, centerSlice, matchTextDirection, gaplessPlayback, filterQuality} = {}) {
    return new Image({
        key:key,
        image:image,
        semanticLabel:semanticLabel,
        excludeFromSemantics:excludeFromSemantics,
        width:width,
        height:height,
        color:color,
        colorBlendMode:colorBlendMode,
        fit:fit,
        alignment:alignment,
        repeat:repeat,
        centerSlice:centerSlice,
        matchTextDirection:matchTextDirection,
        gaplessPlayback:gaplessPlayback,
        filterQuality:filterQuality,
    });
};

Image.network = function( src, { key, scale, semanticLabel, excludeFromSemantics, width, height, color,
    colorBlendMode, fit, alignment, repeat, centerSlice, matchTextDirection, gaplessPlayback, filterQuality, headers } = {}) {
    let v = new Image();
    v.constructorName = "network";

    v.src = src;
    v.key = key;
    v.scale = scale;
    v.semanticLabel = semanticLabel;
    v.excludeFromSemantics = excludeFromSemantics;
    v.width = width;
    v.height = height;
    v.color = color;
    v.colorBlendMode = colorBlendMode;
    v.fit = fit;
    v.alignment = alignment;
    v.repeat = repeat;
    v.centerSlice = centerSlice;
    v.matchTextDirection = matchTextDirection;
    v.gaplessPlayback = gaplessPlayback;
    v.filterQuality = filterQuality;
    v.headers = headers;
    return v;
};

Image.file = function( file, {key, scale, semanticLabel, excludeFromSemantics, width, height, color,
    colorBlendMode, fit, alignment, repeat, centerSlice, matchTextDirection, gaplessPlayback, filterQuality} = {} ) {
    let v = new Image();
    v.constructorName = "file";

    v.file = file;
    v.key = key;
    v.scale = scale;
    v.semanticLabel = semanticLabel;
    v.excludeFromSemantics = excludeFromSemantics;
    v.width = width;
    v.height = height;
    v.color = color;
    v.colorBlendMode = colorBlendMode;
    v.fit = fit;
    v.alignment = alignment;
    v.repeat = repeat;
    v.centerSlice = centerSlice;
    v.matchTextDirection = matchTextDirection;
    v.gaplessPlayback = gaplessPlayback;
    v.filterQuality = filterQuality;
    return v;
};

Image.asset = function( name, {key, bundle, semanticLabel, excludeFromSemantics, scale, width, height, color,
    colorBlendMode, fit, alignment, repeat, centerSlice, matchTextDirection, gaplessPlayback, package, filterQuality} = {}) {
    let v = new Image();
    v.constructorName = "asset";

    v.name = name;
    v.key = key;
    v.bundle = bundle;
    v.semanticLabel = semanticLabel;
    v.excludeFromSemantics = excludeFromSemantics;
    v.scale = scale;
    v.width = width;
    v.height = height;
    v.color = color;
    v.colorBlendMode = colorBlendMode;
    v.fit = fit;
    v.alignment = alignment;
    v.repeat = repeat;
    v.centerSlice = centerSlice;
    v.matchTextDirection = matchTextDirection;
    v.gaplessPlayback = gaplessPlayback;
    v.package = package;
    v.filterQuality = filterQuality;
    return v;
};

Image.memory = function( bytes, { key, scale, semanticLabel, excludeFromSemantics, width, height, color,
    colorBlendMode, fit, alignment, repeat, centerSlice, matchTextDirection, gaplessPlayback, filterQuality} = {}) {
    let v = new Image();
    v.constructorName = "memory";

    v.bytes = bytes;
    v.key = key;
    v.scale = scale;
    v.semanticLabel = semanticLabel;
    v.excludeFromSemantics = excludeFromSemantics;
    v.width = width;
    v.height = height;
    v.color = color;
    v.colorBlendMode = colorBlendMode;
    v.fit = fit;
    v.alignment = alignment;
    v.repeat = repeat;
    v.centerSlice = centerSlice;
    v.matchTextDirection = matchTextDirection;
    v.gaplessPlayback = gaplessPlayback;
    v.filterQuality = filterQuality;
    return v;
};


//-------------- M -----------------
//****** MemoryImage ******
class MemoryImage extends FlutterWidget {
  constructor({ bytes, scale } = {}) {
    super();

    this.bytes = bytes;
    this.scale = scale;
  }
}
MemoryImage.new = function({ bytes, scale } = {}) {
  return new MemoryImage({
      bytes:bytes,
      scale:scale,
  });
};

//-------------- N -----------------
//****** NetworkImage ******
class NetworkImage extends FlutterWidget {
  constructor(url, { scale, headers } = {}) {
    super();

    this.url = url;
    this.scale = scale;
    this.headers = headers;
  }
}
NetworkImage.new = function(url, { scale, headers } = {}) {
  return new NetworkImage(url, {
      scale:scale,
      headers:headers,
  });
};



module.exports = {
  AssetImage,
  ExactAssetImage,
  FileImage,
  MemoryImage,
  NetworkImage,
  Image,
  DecorationImage
};
