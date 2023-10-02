export const htmlString: string = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-2">
</head>
<body>
<div class="Keret">
    <div class="TonusosDoboz">
        <div class="Kozep">
            <table border="0" cellpadding="6" cellspacing="0" width="100%">
                <tr class="formtable">
                    <td width="1">&nbsp;</td>
                    <td colspan="2">
                        <table border="0" cellpadding="3" cellspacing="0" class="formtable" width="100%">
                            <tr>
                                <td width="125"><strong>Időpont:</strong></td>
                                <td>1935. december 28.</td>
                                <td rowspan="8" valign="top" align="right" width="16">&nbsp;</td>
                            </tr>
                            <tr>
                                <td width="125"><strong>Faj:</strong></td>
                                <td><a href="javascript:loginAlert()" class="Bordo">Mezei veréb</a> - <em>Passer
                                    montanus</em></td>
                            </tr>
                            <tr>
                                <td width="125"><strong>Példány, kor, ivar:</strong></td>
                                <td>1,&nbsp;&nbsp;ad.</td>
                            </tr>
                            <tr>
                                <td width="125"><strong>Település, megye:</strong></td>
                                <td><span class="text">
									Eger, Heves								</span></td>
                            </tr>

                            <tr>
                                <td width="125"><strong>Terület:</strong></td>
                                <td>Nagy-Eged</td>
                            </tr>
                            <tr>
                                <td width="125"><strong>Megfigyelő(k):</strong></td>
                                <td>John Doe, Jane Doe</td>
                            </tr>
                            <tr>
                                <td width="125"><strong>Feltöltő:</strong></td>
                                <td><a class="Bordo" href="http://birding.hu/useradatlap/0000">Jack Doe</a></td>
                            </tr>

                            <tr>
                                <td width="125"><strong>Megjegyzés:</strong></td>
                                <td>
                                    <div style="word-wrap:break-word;width:500px">Testing data</div>
                                </td>
                            </tr>

                            <tr>
                                <script type="text/javascript">

                                    var gMapLat = '47.927998';
                                    var gMapLong = '20.410659';


                                    function callGoogleMaps(lat, long) {
                                        window.open('https://www.google.com/maps/place/' + lat + 'N,' + long + 'E', '2_blank');
                                    }

                                    function showAddress(address) {
                                        console.log(address);
                                        a = address.replace(/, Magyaror.*/g, '');
                                        console.log(a);
                                        $.getJSON('https://dev.utcakereso.hu/terkep.php/geocoder/get/' + a, function (data) {
                                                lon = parseFloat(data.lon).toFixed(6);
                                                lat = parseFloat(data.lat).toFixed(6);

                                                if (isNaN(lon)) lon = 19.56;
                                                if (isNaN(lat)) lat = 47.16;

                                                $('#longitude').val(lat);
                                                $('#lattitude').val(lon);

                                                gMapLat = lat;
                                                gMapLong = lon;

                                                newLatLng = new L.LatLng(lat, lon);
                                                marker.setLatLng(newLatLng).bindTooltip(lon + ',' + lat);
                                                ;
                                                mymap.setView(newLatLng);
                                            }
                                        );
                                    }

                                    $('document').ready(function () {
                                    });
                                </script>


                                <td class="szoveg">
                                    <strong>GPS-koordináták: </strong>
                                </td>
                                <td>
                                    <span style="white-space:nowrap;display:inline;">É:&nbsp;<input type="text"
                                                                                                    name="longitude"
                                                                                                    id="longitude"
                                                                                                    readonly
                                                                                                    style="width:80px;"
                                                                                                    value="47.927998"></span>
                                    <span style="white-space:nowrap;display:inline;">K:&nbsp;<input type="text"
                                                                                                    name="lattitude"
                                                                                                    id="lattitude"
                                                                                                    readonly
                                                                                                    style="width:80px;"
                                                                                                    value="20.410659"></span>
                                    <input type="button" value="google"
                                           onclick="javascript: callGoogleMaps(gMapLat, gMapLong);">
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <div id="map_canvas" style="z-index:0;width:395px;height:220px;"></div>
                                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
                                          integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
                                          crossorigin=""/>
                                    <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
                                            integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
                                            crossorigin=""></script>

                                    <script>
                                        var mymap = L.map('map_canvas').setView([47.927998, 20.410659], 13);
                                        L.tileLayer('https://utcakereso.hu/tile/osm/{z}/{x}/{y}.png?access_token={accessToken}', {
                                                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,<a href="https://utcakereso.hu/">Utcakereso.hu</a>',
                                                maxZoom: 18,
                                                id: 'mapbox.streets',
                                                accessToken: 'your.mapbox.access.token'
                                            }
                                        ).addTo(mymap);


                                        var marker = L.marker([47.927998, 20.410659],
                                            {
                                                draggable: false
                                            }
                                        ).addTo(mymap);
                                    </script>

                                </td>
                                <td width="240" valign="top" align="center"><a class="thickbox" href="../../assets/images/glareola_pratincola.png"><img src="../../assets/images/glareola_pratincola.png" border="0"></a>						<br>
							<a href="http://www.birding.hu/kepertekeles/00000" class="Bordo">Értékelés:</a> 5/5

						 <a href="http://www.birding.hu/kepertekeles/00000" class="Bordo">Kommentek száma:</a> 0
					</td>
                            </tr>

                        </table>
                        <br>
                    </td>

                </tr>
            </table>
            <script type="text/javascript">
                function loginAlert() {
                    alert('A tartalom megtekintéséhez be kell jelentkezni!');
                }
            </script>
        </div>
    </div>
</div>
</body>
</html>`;
