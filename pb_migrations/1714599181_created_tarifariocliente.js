/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "je6rsimlsaelle7",
    "created": "2024-05-01 21:33:01.463Z",
    "updated": "2024-05-01 21:33:01.463Z",
    "name": "tarifariocliente",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zhnlm29w",
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
  const collection = dao.findCollectionByNameOrId("je6rsimlsaelle7");

  return dao.deleteCollection(collection);
})
