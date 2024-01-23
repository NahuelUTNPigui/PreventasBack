/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0lx2ecmhwkuw74a",
    "created": "2024-01-23 18:24:07.617Z",
    "updated": "2024-01-23 18:24:07.617Z",
    "name": "DestinatarioXCliente",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2f7eab5n",
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
        "id": "vszftyrg",
        "name": "destinatario",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "hohl6xycaxl2fje",
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
  const collection = dao.findCollectionByNameOrId("0lx2ecmhwkuw74a");

  return dao.deleteCollection(collection);
})
