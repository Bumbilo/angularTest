import {ColorDirective} from './color.directive';

describe('ColorDirective', () => {
  let directive: ColorDirective;

  beforeEach(() => {
    directive = new ColorDirective();
  });

  it('Should crate instance', () => {
    expect(directive).toBeTruthy();
  });

  it('Should chang color when to click on element', () => {
    directive.onClick();
    expect(directive.color).toEqual('red');
  });
});
