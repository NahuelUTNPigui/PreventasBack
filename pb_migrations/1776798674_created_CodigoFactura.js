/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6e981izm9s8p275",
    "created": "2026-04-21 19:11:14.594Z",
    "updated": "2026-04-21 19:11:14.594Z",
    "name": "CodigoFactura",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cqdura9r",
        "name": "maximo",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6e981izm9s8p275");

  return dao.deleteCollection(collection);
})
