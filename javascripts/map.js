NameOverlay.prototype = new google.maps.OverlayView(); // 扩展OverlayView

function initialize() {
var mapCenter = new google.maps.LatLng(39.917, 116.397);
var mapOptions = {
zoom: 14,
center: mapCenter,
mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
// 显示地图

var marker1LatLng = new google.maps.LatLng(39.927, 116.387);
var marker1 = new google.maps.Marker({
position: marker1LatLng, map: map, title:"北海"
});

// 定义一个NameOverlay，显示在指定位置
var name1View = new NameOverlay(marker1LatLng, "北海", map); 

var marker2LatLng = new google.maps.LatLng(39.937, 116.387);
var marker2 = new google.maps.Marker({
position: marker2LatLng, map: map, title:"北师大"
});

var name2View = new NameOverlay(marker2LatLng, "北师大", map); 

}

// NameOverlay定义
function NameOverlay(point, name, map) {

    // 初始化参数：坐标、文字、地图
    this.point_ = point;
    this.name_ = name;
    this.map_ = map;
 
    // 到onAdd时才需要创建div
    this.div_ = null;
 
    // 加入map
    this.setMap(map);
  }
 
  NameOverlay.prototype.onAdd = function() {
 
    // 创建一个div，其中包含了当前文字
    var div = document.createElement('DIV');
    div.style.borderStyle = "none";
    div.style.borderWidth = "0px";
    div.style.position = "absolute";
 
    var span = document.createElement("span");
    var text = document.createTextNode(this.name_);
    span.appendChild(text);
    div.appendChild(span);
 
    // Set the overlay's div_ property to this DIV
    this.div_ = div;
 
    // We add an overlay to a map via one of the map's panes.
    // We'll add this overlay to the overlayImage pane.
    var panes = this.getPanes();
    panes.overlayImage.appendChild(div);
  }
 
  NameOverlay.prototype.draw = function() {
 
    // 利用projection获得当前视图的坐标
    var overlayProjection = this.getProjection();
 
    var center = overlayProjection.fromLatLngToDivPixel(this.point_);
 
    // 为简单，长宽是固定的，实际应该根据文字改变
    var div = this.div_;
    div.style.left = center.x + 'px';
    div.style.top = center.y + 'px';
    div.style.width = '100px';
    div.style.height = '10px';
  }
 
  NameOverlay.prototype.onRemove = function() {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }