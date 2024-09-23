// import L from 'leaflet';
// import '../index';
// import 'leaflet-contextmenu';
// import 'leaflet-modal';

const map = new L.Map('map', {
    contextmenu: true,
    contextmenuItems: [{
        text: 'Bookmark this position',
        callback: function(evt) {
        this.fire('bookmark:new', { latlng: evt.latlng });
        }
    }]
}).setView([-20.788195281530044, -51.70308998035825], 14.4);

const layer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const control = new L.Control.Bookmarks().addTo(map);

const bookmarksControl = new L.Control.Bookmarks({
    position: 'topleft',
    onRemove: function(bookmark, callback) {
        map.fire('modal', {
        title: 'Are you sure?',
        content: '<p>Do you wnat to remove bookmark <strong>' + bookmark.name + '</strong>?</p>',
        template: ['<div class="modal-header"><h2>{title}</h2></div>',
            '<hr>',
            '<div class="modal-body">{content}</div>',
            '<div class="modal-footer">',
            '<button class="topcoat-button--large {OK_CLS}">{okText}</button>',
            '<button class="topcoat-button--large {CANCEL_CLS}">{cancelText}</button>',
            '</div>'
        ].join(''),

        okText: 'Ok',
        cancelText: 'Cancel',
        OK_CLS: 'modal-ok',
        CANCEL_CLS: 'modal-cancel',

        width: 300,

        onShow: function({ modal }) {
            L.DomEvent
            .on(modal._container.querySelector('.modal-ok'), 'click', function() {
                modal.hide();
                callback(true);
            })
            .on(modal._container.querySelector('.modal-cancel'), 'click', function() {
                modal.hide();
                callback(false)
            });
        }
    });
    },
});

map.addControl(bookmarksControl);