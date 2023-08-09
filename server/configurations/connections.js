require('dotenv').config();
const mongoose = require('mongoose');
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function HomePage({ roomId }) {
  const [serverUrl, setServerUrl] = useState(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pokemon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

  useEffect(() => {
    const connection = mongoose.createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
}


// const mongoose = require('mongoose');
// require('dotenv').config();

// const MONGODB_URI = process.env.MONGODB_URI;

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pokemon', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true, 
// });

// module.exports = mongoose.connection;