import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/Home/Home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/Item/Item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/Score/Score')), 'score')
    }]
}]