/*
* Express syllogisms using JS.
 */

/*
* Syllogism 1
* All men are mortal
* Socrates is a man.
* Therefore, socrates is mortal
 */

const men = 'mortal';
const socrates = 'man';

if (men == 'mortal') {
  console.log('All men are mortal');
  if (socrates == 'man') {
    console.log('Socrates is a man');
  }
  if (men == 'mortal' && socrates == 'man') console.log('Therefore, socrates is mortal');
}
/*
* Syllogism 2
* This cake is either vanilla or chocolate.
* This cake is not chocolate.
* Therefore, this cake is vanilla.
*/

const cake = 'vanilla';

if (cake == 'vanilla' || cake == 'chocolate') {
  console.log('This cake is either vanilla or chocolate');
  if (cake == 'vanilla') {
    console.log('This cake is not chocolate');
    console.log('Therefore this cake is vanilla');
  } else {
    console.log('This cake is not vanilla');
    console.log('Therefore this cake is chocolate');
  }
}
