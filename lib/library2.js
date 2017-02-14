const reverseString= function reverseString(s)
{
  if (s === '')
  return null;
  else
  {
  var reversed = [];
  for (var i= 0, len =s.length; i<=len; i++)
    reversed.push(s.charAt(len -i));
  newString = reversed.join('');
  if (newString === s)
  return true;
  else 
  return reversed.join('');
  }
};

module.exports = reverseString;