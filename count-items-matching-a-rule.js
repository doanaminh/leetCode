 var countMatches = function(items, ruleKey, ruleValue) {
  let key;
  switch(ruleKey) {
      case 'type':
          key = 0;
          break;
      case 'color':
          key = 1;
          break;
      case 'name': 
          key = 2;
          break;
  }
  return items.filter(el => el[key] === ruleValue).length;
};