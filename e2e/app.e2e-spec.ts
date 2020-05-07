import { InvManagementPage } from './app.po';

describe('inv-management App', function() {
  let page: InvManagementPage;

  beforeEach(() => {
    page = new InvManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
