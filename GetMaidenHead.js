function getMaidenHead(lat,lon){
  var U = 'ABCDEFGHIJKLMNOPQRSTUVWX';
  var L = U.toLowerCase();
  //Latitude
  t = (lat+90)/10;
  fLat = Math.floor(t);
  t = (t % fLat)*10;
  sqLat = Math.floor(t);
  t=(t-sqLat)*24;
  subLat = Math.floor(t);
  t=(t-subLat)*10;
  extLat = Math.floor(t);
  t=(t-extLat)*24;
  supLat = Math.floor(t);
  t = (lon+180)/20;
  fLon = Math.floor(t);
  t = (t % fLon)*10;
  sqLon = Math.floor(t);
  t=(t-sqLon)*24;
  subLon = Math.floor(t);
  t=(t-subLon)*10;
  extLon = Math.floor(t);
  t=(t-extLon)*24;
  supLon = Math.floor(t);
  return U[fLon]+U[fLat]+sqLon+sqLat+L[subLon]+L[subLat]
    +extLon+extLat+U[supLon]+U[supLat];
}
