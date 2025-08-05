import { test, Browser, Page, expect } from '@playwright/test';

(async () => {

  let browser: Browser;
  let page: Page;

  test.describe('Navegacion en www.freerangetesters.com ', () => {
    const sections= [
      {nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos'},
      {nombre: 'Mentorías', url: '/mentoria-1-1-con-pato', tituloEsperado: 'Mentoría personalizada de avance de carrera para testers de software'},
      {nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos'}
    ];
    for (const section of sections){

        test(`Validate redirection to "${section.nombre}"`, async ({ page }) => {
        await test.step('Given a user navigating to the website', async () => {
          await page.goto('https://www.freerangetesters.com/');
        await test.step(`when user clicks on section ${section.nombre}`, async () => {
          page.locator('#page_header').getByRole('link',{name: section.nombre, exact: true}).click();
          await page.waitForURL(`**${section.url}`);
        })
        await test.step(`and page title is ${section.tituloEsperado}`, async () => {
          await expect(page).toHaveTitle(section.tituloEsperado);
        })
        
                
        })      
      })
  }
  })
})();

