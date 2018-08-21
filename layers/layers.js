var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_DepartamentosProductoresdeCaaPanelera_1 = new ol.format.GeoJSON();
var features_DepartamentosProductoresdeCaaPanelera_1 = format_DepartamentosProductoresdeCaaPanelera_1.readFeatures(json_DepartamentosProductoresdeCaaPanelera_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosProductoresdeCaaPanelera_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DepartamentosProductoresdeCaaPanelera_1.addFeatures(features_DepartamentosProductoresdeCaaPanelera_1);var lyr_DepartamentosProductoresdeCaaPanelera_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosProductoresdeCaaPanelera_1, 
                style: style_DepartamentosProductoresdeCaaPanelera_1,
    title: 'Departamentos Productores de Caña Panelera<br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_0.png" />  36 - 100 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_1.png" />  100 - 500 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_2.png" />  500 - 1000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_3.png" />  1000 - 5000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_4.png" />  5000 - 10000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_5.png" />  10000 - 15000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_6.png" />  15000 - 25000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_7.png" />  25000 - 40000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_8.png" />  40000 - 50000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_9.png" />  50000 - 100000 <br />\
    <img src="styles/legend/DepartamentosProductoresdeCaaPanelera_1_10.png" />  100000 - 250000 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_DepartamentosProductoresdeCaaPanelera_1.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_DepartamentosProductoresdeCaaPanelera_1];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldAliases', {'DEPT': 'DEPT', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldImages', {'DEPT': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_DepartamentosProductoresdeCaaPanelera_1.set('fieldLabels', {'DEPT': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_DepartamentosProductoresdeCaaPanelera_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});