var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_jalan_1 = new ol.format.GeoJSON();
var features_jalan_1 = format_jalan_1.readFeatures(json_jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_1.addFeatures(features_jalan_1);
var lyr_jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_1, 
                style: style_jalan_1,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_1.png" /> jalan'
            });
var format_tandasstaff_2 = new ol.format.GeoJSON();
var features_tandasstaff_2 = format_tandasstaff_2.readFeatures(json_tandasstaff_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tandasstaff_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tandasstaff_2.addFeatures(features_tandasstaff_2);
var lyr_tandasstaff_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tandasstaff_2, 
                style: style_tandasstaff_2,
                popuplayertitle: "tandas staff",
                interactive: true,
                title: '<img src="styles/legend/tandasstaff_2.png" /> tandas staff'
            });
var format_tandasawam_3 = new ol.format.GeoJSON();
var features_tandasawam_3 = format_tandasawam_3.readFeatures(json_tandasawam_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tandasawam_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tandasawam_3.addFeatures(features_tandasawam_3);
var lyr_tandasawam_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tandasawam_3, 
                style: style_tandasawam_3,
                popuplayertitle: "tandas awam",
                interactive: true,
                title: '<img src="styles/legend/tandasawam_3.png" /> tandas awam'
            });
var format_tandasstudent_4 = new ol.format.GeoJSON();
var features_tandasstudent_4 = format_tandasstudent_4.readFeatures(json_tandasstudent_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tandasstudent_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tandasstudent_4.addFeatures(features_tandasstudent_4);
var lyr_tandasstudent_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tandasstudent_4, 
                style: style_tandasstudent_4,
                popuplayertitle: "tandas student",
                interactive: true,
                title: '<img src="styles/legend/tandasstudent_4.png" /> tandas student'
            });
var format_Bangunan_5 = new ol.format.GeoJSON();
var features_Bangunan_5 = format_Bangunan_5.readFeatures(json_Bangunan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_5.addFeatures(features_Bangunan_5);cluster_Bangunan_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Bangunan_5
});
var lyr_Bangunan_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bangunan_5, 
                style: style_Bangunan_5,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_5.png" /> Bangunan'
            });
var group_PoliteknikUngkuOmarJalanRajaMusaMahadiPoliteknikUngkuOmarIpohPerak2 = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_jalan_1,lyr_tandasstaff_2,lyr_tandasawam_3,lyr_tandasstudent_4,lyr_Bangunan_5,],
                                fold: "open",
                                title: "Politeknik Ungku Omar, Jalan Raja Musa Mahadi, Politeknik Ungku Omar, Ipoh, Perak 2"});

lyr_GoogleSatellite_0.setVisible(true);lyr_jalan_1.setVisible(true);lyr_tandasstaff_2.setVisible(true);lyr_tandasawam_3.setVisible(true);lyr_tandasstudent_4.setVisible(true);lyr_Bangunan_5.setVisible(true);
var layersList = [group_PoliteknikUngkuOmarJalanRajaMusaMahadiPoliteknikUngkuOmarIpohPerak2];
lyr_jalan_1.set('fieldAliases', {'id': 'id', });
lyr_tandasstaff_2.set('fieldAliases', {'id': 'id', 'tandas': 'tandas', });
lyr_tandasawam_3.set('fieldAliases', {'id': 'id', 'tandas': 'tandas', });
lyr_tandasstudent_4.set('fieldAliases', {'id': 'id', 'tandas': 'tandas', });
lyr_Bangunan_5.set('fieldAliases', {'Name': 'Name', 'GAMBAR': 'GAMBAR', });
lyr_jalan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_tandasstaff_2.set('fieldImages', {'id': 'TextEdit', 'tandas': 'TextEdit', });
lyr_tandasawam_3.set('fieldImages', {'id': 'TextEdit', 'tandas': 'TextEdit', });
lyr_tandasstudent_4.set('fieldImages', {'id': 'TextEdit', 'tandas': 'TextEdit', });
lyr_Bangunan_5.set('fieldImages', {'Name': 'TextEdit', 'GAMBAR': 'ExternalResource', });
lyr_jalan_1.set('fieldLabels', {'id': 'no label', });
lyr_tandasstaff_2.set('fieldLabels', {'id': 'inline label - always visible', 'tandas': 'inline label - always visible', });
lyr_tandasawam_3.set('fieldLabels', {'id': 'inline label - always visible', 'tandas': 'inline label - always visible', });
lyr_tandasstudent_4.set('fieldLabels', {'id': 'inline label - always visible', 'tandas': 'inline label - always visible', });
lyr_Bangunan_5.set('fieldLabels', {'Name': 'inline label - always visible', 'GAMBAR': 'inline label - always visible', });
lyr_Bangunan_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});