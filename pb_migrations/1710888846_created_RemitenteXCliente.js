/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "w8unexnalfnfamn",
    "created": "2024-03-19 22:54:06.377Z",
    "updated": "2024-03-19 22:54:06.377Z",
    "name": "RemitenteXCliente",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "l6g3blr0",
        "name": "cliente",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "n93vmko9xuzanug",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "e6i3mgr7",
        "name": "remitente",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "99kqu0vxib506et",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w8unexnalfnfamn");

  return dao.deleteCollection(collection);
})
