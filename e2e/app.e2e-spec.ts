import { Qed42.Web.WhatsappPage } from './app.po';

describe('qed42.web.whatsapp App', () => {
  let page: Qed42.Web.WhatsappPage;

  beforeEach(() => {
    page = new Qed42.Web.WhatsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
