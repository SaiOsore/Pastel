const sayHello = () => {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c Made by Sai Osore (Valerii Hordon) %c %c %c https://saiosore.github.io/ %c %c \n', 
    'color: #fff; background: #e43333; padding:5px 0;', 'background: #131419; padding:5px 0;', 
    'background: #131419; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;', 
    'background: #fff; padding:5px 0;', 'color: #e43333; background: #fff; padding:5px 0;'];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log('Made by Sai Osore (Valerii Hordon) - https://saiosore.github.io/');
  }
}

sayHello();