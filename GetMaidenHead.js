// Implementation based on N1SV's 8-character grid square calculation
// http://n1sv.com/PROJECTS/How%20to%20calculate%20your%208-digit%20grid%20square.pdf

// Some code elements borrowed from HamGridSquare.js
// https://gist.github.com/DrPaulBrewer/4279e9d234a1bd6dd3c0

// All other code written by VE7DAC

getMaidenHead = function(param1,param2){
  var lat=-100.0;
  var lon=0.0;
  var U = 'ABCDEFGHIJKLMNOPQRSTUVWX';
  var L = U.toLowerCase();

  function toNum(x){
    if (typeof(x) === 'number') return x;
    if (typeof(x) === 'string') return parseFloat(x);
    throw "Can not convert input: "+x;
  }

    lat = toNum(param1);
    lon = toNum(param2);
  
  if (Math.abs(lat) === 90.0) throw "grid squares invalid at N/S poles";
  if (Math.abs(lat) > 90) throw "invalid latitude: "+lat;
  if (Math.abs(lon) > 180) throw "invalid longitude: "+lon;

  lon = lon + 180;
  t = lon/20;
  fLon = Math.floor(t);
  t = (t % fLon)*10;
  sqLon = Math.floor(t);
  t=(t-sqLon)*24;
  subLon = Math.floor(t);
  extLon = Math.floor((t-subLon)*10);
  
  lat = lat + 90;
  t = lat/10;
  fLat = Math.floor(t);
  t = (t % fLat)*10;
  sqLat = Math.floor(t);
  t=(t-sqLat)*24;
  subLat = Math.floor(t);
  extLat = Math.floor((t-subLat)*10);
  
  //Character Pairs: Field, Square, Subsquare, Extended
  return U[fLon]+U[fLat]+sqLon+sqLat+L[subLon]+L[subLat]+extLon+extLat;
};
