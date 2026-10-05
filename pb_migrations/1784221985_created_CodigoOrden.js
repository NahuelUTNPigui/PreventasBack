/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rzbemm15i3kia2d",
    "created": "2026-07-16 17:13:05.117Z",
    "updated": "2026-07-16 17:13:05.117Z",
    "name": "CodigoOrden",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zijenqwv",
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
  const collection = dao.findCollectionByNameOrId("rzbemm15i3kia2d");

  return dao.deleteCollection(collection);
})
