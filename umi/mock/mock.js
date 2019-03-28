
import mockjs from 'mockjs';
 
export default {
  'GET /api/img': mockjs.mock({
    "proudcts|3": [
        {
            "name|+1": [
              "Hello",
              "Mock.js",
              "!"
            ]
          }
      ]
  })
};