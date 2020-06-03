angular.module('defautTemp', [])
.component('defautTemp', {
    template: '<ng-outlet></ng-outlet>',
    $routeConfig: [
        {path: '/',    name: 'Pane',   component: 'paneComponent', useAsDefault: true},
        {path: '/chat/:id', name: 'Chat', component: 'chatPane'}
      ]
    
})