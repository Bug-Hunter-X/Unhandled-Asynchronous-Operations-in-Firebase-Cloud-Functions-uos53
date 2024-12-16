The solution involves correctly using Promises or async/await to ensure asynchronous operations complete before proceeding.  Here's the corrected code:
```javascript
exports.myFunction = functions.https.onCall(async (data, context) => {
  try {
    const snapshot = await admin.firestore().collection('myCollection').doc('myDoc').get();
    const myData = snapshot.data();
    if (!myData) {
      console.error('No data found!');
      return null; // or throw an error
    }
    // ... further operations using myData ...
    return { success: true, data: myData };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { success: false, error: error.message };
  }
});
```
This revised function uses `async/await` to ensure that `snapshot.data()` is awaited before being used.  Crucially, it also includes error handling using a `try...catch` block to gracefully handle potential errors during the database operation.