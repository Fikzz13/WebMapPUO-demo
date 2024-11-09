var wms_layers = [];

var format_firstfloorfinal_0 = new ol.format.GeoJSON();
var features_firstfloorfinal_0 = format_firstfloorfinal_0.readFeatures(json_firstfloorfinal_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_firstfloorfinal_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_firstfloorfinal_0.addFeatures(features_firstfloorfinal_0);
var lyr_firstfloorfinal_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_firstfloorfinal_0, 
                style: style_firstfloorfinal_0,
                popuplayertitle: "first floor final",
                interactive: true,
                title: '<img src="styles/legend/firstfloorfinal_0.png" /> first floor final'
            });
var format_secondfloorfinal__1 = new ol.format.GeoJSON();
var features_secondfloorfinal__1 = format_secondfloorfinal__1.readFeatures(json_secondfloorfinal__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_secondfloorfinal__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secondfloorfinal__1.addFeatures(features_secondfloorfinal__1);
var lyr_secondfloorfinal__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secondfloorfinal__1, 
                style: style_secondfloorfinal__1,
                popuplayertitle: "second floor final_",
                interactive: true,
                title: '<img src="styles/legend/secondfloorfinal__1.png" /> second floor final_'
            });
var format_thirdfloorfinal__2 = new ol.format.GeoJSON();
var features_thirdfloorfinal__2 = format_thirdfloorfinal__2.readFeatures(json_thirdfloorfinal__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_thirdfloorfinal__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_thirdfloorfinal__2.addFeatures(features_thirdfloorfinal__2);
var lyr_thirdfloorfinal__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_thirdfloorfinal__2, 
                style: style_thirdfloorfinal__2,
                popuplayertitle: "third floor final_",
                interactive: true,
                title: '<img src="styles/legend/thirdfloorfinal__2.png" /> third floor final_'
            });
var format_fourthfloorfinal__3 = new ol.format.GeoJSON();
var features_fourthfloorfinal__3 = format_fourthfloorfinal__3.readFeatures(json_fourthfloorfinal__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fourthfloorfinal__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fourthfloorfinal__3.addFeatures(features_fourthfloorfinal__3);
var lyr_fourthfloorfinal__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fourthfloorfinal__3, 
                style: style_fourthfloorfinal__3,
                popuplayertitle: "fourth floor final_",
                interactive: true,
                title: '<img src="styles/legend/fourthfloorfinal__3.png" /> fourth floor final_'
            });

        var lyr_GoogleSatellite_4 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DEWANUTAMA_5 = new ol.format.GeoJSON();
var features_DEWANUTAMA_5 = format_DEWANUTAMA_5.readFeatures(json_DEWANUTAMA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEWANUTAMA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEWANUTAMA_5.addFeatures(features_DEWANUTAMA_5);
var lyr_DEWANUTAMA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DEWANUTAMA_5, 
                style: style_DEWANUTAMA_5,
                popuplayertitle: "DEWAN UTAMA",
                interactive: true,
                title: '<img src="styles/legend/DEWANUTAMA_5.png" /> DEWAN UTAMA'
            });
var format_CAFE_6 = new ol.format.GeoJSON();
var features_CAFE_6 = format_CAFE_6.readFeatures(json_CAFE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAFE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAFE_6.addFeatures(features_CAFE_6);
var lyr_CAFE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAFE_6, 
                style: style_CAFE_6,
                popuplayertitle: "CAFE",
                interactive: true,
                title: '<img src="styles/legend/CAFE_6.png" /> CAFE'
            });
var format_KAMSIS_7 = new ol.format.GeoJSON();
var features_KAMSIS_7 = format_KAMSIS_7.readFeatures(json_KAMSIS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAMSIS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAMSIS_7.addFeatures(features_KAMSIS_7);
var lyr_KAMSIS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAMSIS_7, 
                style: style_KAMSIS_7,
                popuplayertitle: "KAMSIS",
                interactive: true,
                title: '<img src="styles/legend/KAMSIS_7.png" /> KAMSIS'
            });
var format_PEJABAT_8 = new ol.format.GeoJSON();
var features_PEJABAT_8 = format_PEJABAT_8.readFeatures(json_PEJABAT_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEJABAT_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEJABAT_8.addFeatures(features_PEJABAT_8);
var lyr_PEJABAT_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEJABAT_8, 
                style: style_PEJABAT_8,
                popuplayertitle: "PEJABAT",
                interactive: true,
                title: '<img src="styles/legend/PEJABAT_8.png" /> PEJABAT'
            });
var format_BANGUNANAKADEMIK_9 = new ol.format.GeoJSON();
var features_BANGUNANAKADEMIK_9 = format_BANGUNANAKADEMIK_9.readFeatures(json_BANGUNANAKADEMIK_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNANAKADEMIK_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNANAKADEMIK_9.addFeatures(features_BANGUNANAKADEMIK_9);
var lyr_BANGUNANAKADEMIK_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNANAKADEMIK_9, 
                style: style_BANGUNANAKADEMIK_9,
                popuplayertitle: "BANGUNAN AKADEMIK",
                interactive: true,
                title: '<img src="styles/legend/BANGUNANAKADEMIK_9.png" /> BANGUNAN AKADEMIK'
            });
var format_BENGKEL_10 = new ol.format.GeoJSON();
var features_BENGKEL_10 = format_BENGKEL_10.readFeatures(json_BENGKEL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BENGKEL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BENGKEL_10.addFeatures(features_BENGKEL_10);
var lyr_BENGKEL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BENGKEL_10, 
                style: style_BENGKEL_10,
                popuplayertitle: "BENGKEL",
                interactive: true,
                title: '<img src="styles/legend/BENGKEL_10.png" /> BENGKEL'
            });
var format_library_11 = new ol.format.GeoJSON();
var features_library_11 = format_library_11.readFeatures(json_library_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_library_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_library_11.addFeatures(features_library_11);
var lyr_library_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_library_11, 
                style: style_library_11,
                popuplayertitle: "library",
                interactive: true,
                title: '<img src="styles/legend/library_11.png" /> library'
            });
var format_fasility_12 = new ol.format.GeoJSON();
var features_fasility_12 = format_fasility_12.readFeatures(json_fasility_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasility_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasility_12.addFeatures(features_fasility_12);
var lyr_fasility_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasility_12, 
                style: style_fasility_12,
                popuplayertitle: "fasility",
                interactive: true,
                title: '<img src="styles/legend/fasility_12.png" /> fasility'
            });
var format_jln_13 = new ol.format.GeoJSON();
var features_jln_13 = format_jln_13.readFeatures(json_jln_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jln_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jln_13.addFeatures(features_jln_13);
var lyr_jln_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jln_13, 
                style: style_jln_13,
                popuplayertitle: "jln",
                interactive: true,
                title: '<img src="styles/legend/jln_13.png" /> jln'
            });
var group_PoliteknikUngkuOmarJalanRajaMusaMahadiPoliteknikUngkuOmarIpohPerak2 = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_4,lyr_DEWANUTAMA_5,lyr_CAFE_6,lyr_KAMSIS_7,lyr_PEJABAT_8,lyr_BANGUNANAKADEMIK_9,lyr_BENGKEL_10,lyr_library_11,lyr_fasility_12,lyr_jln_13,],
                                fold: "open",
                                title: "Politeknik Ungku Omar, Jalan Raja Musa Mahadi, Politeknik Ungku Omar, Ipoh, Perak 2"});
var group_ClassJKAJKM = new ol.layer.Group({
                                layers: [lyr_firstfloorfinal_0,lyr_secondfloorfinal__1,lyr_thirdfloorfinal__2,lyr_fourthfloorfinal__3,],
                                fold: "open",
                                title: "Class JKA/JKM"});

lyr_firstfloorfinal_0.setVisible(false);lyr_secondfloorfinal__1.setVisible(false);lyr_thirdfloorfinal__2.setVisible(false);lyr_fourthfloorfinal__3.setVisible(false);lyr_GoogleSatellite_4.setVisible(true);lyr_DEWANUTAMA_5.setVisible(true);lyr_CAFE_6.setVisible(true);lyr_KAMSIS_7.setVisible(true);lyr_PEJABAT_8.setVisible(true);lyr_BANGUNANAKADEMIK_9.setVisible(true);lyr_BENGKEL_10.setVisible(true);lyr_library_11.setVisible(true);lyr_fasility_12.setVisible(true);lyr_jln_13.setVisible(true);
var layersList = [group_ClassJKAJKM,group_PoliteknikUngkuOmarJalanRajaMusaMahadiPoliteknikUngkuOmarIpohPerak2];
lyr_firstfloorfinal_0.set('fieldAliases', {'ID': 'ID', 'TINGKAT': 'TINGKAT', 'NO.BILIK': 'NO.BILIK', 'NAMA BILIK': 'NAMA BILIK', 'JABATAN': 'JABATAN', });
lyr_secondfloorfinal__1.set('fieldAliases', {'ID': 'ID', 'TINGKAT': 'TINGKAT', 'NO.BILIK': 'NO.BILIK', 'NAMA BILIK': 'NAMA BILIK', 'BLOK BGN': 'BLOK BGN', });
lyr_thirdfloorfinal__2.set('fieldAliases', {'ID': 'ID', 'TINGKAT': 'TINGKAT', 'NO.BILIK': 'NO.BILIK', 'NAMA BILIK': 'NAMA BILIK', 'BLOK BGN': 'BLOK BGN', });
lyr_fourthfloorfinal__3.set('fieldAliases', {'ID': 'ID', 'TINGKAT': 'TINGKAT', 'NO.BILIK': 'NO.BILIK', 'NAMA BILIK': 'NAMA BILIK', 'BLOK BGN': 'BLOK BGN', });
lyr_DEWANUTAMA_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'link web': 'link web', });
lyr_CAFE_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'link web': 'link web', });
lyr_KAMSIS_7.set('fieldAliases', {'id': 'id', 'name': 'name', 'link web': 'link web', });
lyr_PEJABAT_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'link web': 'link web', });
lyr_BANGUNANAKADEMIK_9.set('fieldAliases', {'id': 'id', 'name': 'name', 'link web': 'link web', });
lyr_BENGKEL_10.set('fieldAliases', {'id': 'id', 'name': 'name', 'link web': 'link web', });
lyr_library_11.set('fieldAliases', {'id': 'id', 'name': 'name', 'link web': 'link web', });
lyr_fasility_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'Gambar': 'Gambar', });
lyr_jln_13.set('fieldAliases', {'id': 'id', });
lyr_firstfloorfinal_0.set('fieldImages', {'ID': '', 'TINGKAT': '', 'NO.BILIK': '', 'NAMA BILIK': '', 'JABATAN': '', });
lyr_secondfloorfinal__1.set('fieldImages', {'ID': '', 'TINGKAT': '', 'NO.BILIK': '', 'NAMA BILIK': '', 'BLOK BGN': '', });
lyr_thirdfloorfinal__2.set('fieldImages', {'ID': '', 'TINGKAT': '', 'NO.BILIK': '', 'NAMA BILIK': '', 'BLOK BGN': '', });
lyr_fourthfloorfinal__3.set('fieldImages', {'ID': '', 'TINGKAT': '', 'NO.BILIK': '', 'NAMA BILIK': '', 'BLOK BGN': '', });
lyr_DEWANUTAMA_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'link web': 'TextEdit', });
lyr_CAFE_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link web': 'TextEdit', });
lyr_KAMSIS_7.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link web': 'TextEdit', });
lyr_PEJABAT_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link web': 'TextEdit', });
lyr_BANGUNANAKADEMIK_9.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link web': 'TextEdit', });
lyr_BENGKEL_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link web': 'TextEdit', });
lyr_library_11.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link web': 'TextEdit', });
lyr_fasility_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_jln_13.set('fieldImages', {'id': 'TextEdit', });
lyr_firstfloorfinal_0.set('fieldLabels', {'ID': 'no label', 'TINGKAT': 'inline label - always visible', 'NO.BILIK': 'inline label - always visible', 'NAMA BILIK': 'inline label - always visible', 'JABATAN': 'inline label - always visible', });
lyr_secondfloorfinal__1.set('fieldLabels', {'ID': 'no label', 'TINGKAT': 'inline label - always visible', 'NO.BILIK': 'inline label - always visible', 'NAMA BILIK': 'inline label - always visible', 'BLOK BGN': 'inline label - always visible', });
lyr_thirdfloorfinal__2.set('fieldLabels', {'ID': 'no label', 'TINGKAT': 'inline label - always visible', 'NO.BILIK': 'inline label - always visible', 'NAMA BILIK': 'inline label - always visible', 'BLOK BGN': 'inline label - always visible', });
lyr_fourthfloorfinal__3.set('fieldLabels', {'ID': 'no label', 'TINGKAT': 'inline label - always visible', 'NO.BILIK': 'inline label - always visible', 'NAMA BILIK': 'inline label - always visible', 'BLOK BGN': 'inline label - always visible', });
lyr_DEWANUTAMA_5.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'link web': 'inline label - always visible', });
lyr_CAFE_6.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'link web': 'inline label - always visible', });
lyr_KAMSIS_7.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'link web': 'inline label - always visible', });
lyr_PEJABAT_8.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'link web': 'inline label - always visible', });
lyr_BANGUNANAKADEMIK_9.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'link web': 'inline label - always visible', });
lyr_BENGKEL_10.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'link web': 'inline label - always visible', });
lyr_library_11.set('fieldLabels', {'id': 'no label', 'name': 'inline label - always visible', 'link web': 'inline label - always visible', });
lyr_fasility_12.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'Gambar': 'inline label - always visible', });
lyr_jln_13.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_jln_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});