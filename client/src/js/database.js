import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("Put to database");

  const jateDb = await openDB("jate", 1);

  const tx = jateDb.transaction("jate", "readwrite");

  const store = tx.objectStore("jate");

  const request = store.put({ localData: content });

  const result = await request;
  console.log("data saved to the database", result);
  //console.error("putDb not implemented");
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET all from the database");

  // Create a connection to the database and version
  const jateDb = await openDB("jate", 1);

  // Create a new transaction and specify the database and data privileges
  const tx = jateDb.transaction("jate", "readonly");

  // Open up the desired object store
  const store = tx.objectStore("jate");

  // Use the .getAll() method to get all data in the database
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log("result.value", result);
  if (results && results.length > 0) {
    return result[result.length - 1].localData;
  }

  return undefined;
};
initdb();
