import dva from 'dva';
import './index.css';

import { createBrowserHistory  as createHistory} from 'history';
// 1. Initialize
const app = dva({
    initialState: {
            products: [
              { name: 'dva', id: 1 },
              { name: 'antd', id: 2 },
           ],
         },
  history : createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
 app.model(require('./models/example').default);
 app.model(require('./models/add').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
