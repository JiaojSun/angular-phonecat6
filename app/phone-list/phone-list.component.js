'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];

      this.orderProp = 'age';
    }
  });

/*修改数据模型：每个phone对象都新增了age属性，用于按手机推出时间排序。
设置默认以“age”为排序依据。如果不设置默认值，即手机列表不会进行排序，直到用户从下拉菜单中选择选项。
双向绑定：页面加载后，我们会看到“Newest”被选中，这是因为控制器设置了默认排序依据“age”，实现了数据模型-->UI的绑定。如果我们在下拉菜单中选择“Alphabetically”，数据模型也会更新，进而手机列表重新进行排序，这就是UI-->数据模型的绑定。
总结起来就是，改变数据模型会改变视图，改变视图也会改变数据模型。
*/