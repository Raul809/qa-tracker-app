var e={1:{name:`Nivel 1 · Fundamentos`,color:`emerald`},2:{name:`Nivel 2 · Diseño de pruebas`,color:`sky`},3:{name:`Nivel 3 · Técnicas avanzadas y casos`,color:`violet`},4:{name:`Nivel 4 · Defectos`,color:`amber`},5:{name:`Nivel 5 · Exploratorio`,color:`rose`}},t={critical:`Crítica`,high:`Alta`,medium:`Media`,low:`Baja`},n=[{id:`t1`,severity:`high`,title:`El total no suma el ITBIS cuando hay 2 o más productos distintos (historia SHOP-112 de tu plan)`,where:`Resumen del pedido`},{id:`t2`,severity:`high`,title:`La cantidad acepta 0 y números negativos, y el total baja`,where:`Carrito · cantidad`},{id:`t3`,severity:`medium`,title:`El Mouse cuesta RD$1,200 en el catálogo pero RD$1,250 en el carrito`,where:`Catálogo vs carrito`},{id:`t4`,severity:`high`,title:`El cupón QA10 se puede aplicar varias veces y acumula descuentos`,where:`Cupón`},{id:`t5`,severity:`medium`,title:`El email de confirmación se acepta sin “@”`,where:`Checkout · email`},{id:`t6`,severity:`high`,title:`Con el carrito vacío se puede confirmar un pedido de RD$0`,where:`Checkout`},{id:`t7`,severity:`low`,title:`Tras “Vaciar carrito”, el contador del encabezado no se actualiza`,where:`Encabezado`},{id:`t8`,severity:`low`,title:`Errata en el botón: “Procesar pagó”`,where:`Checkout`}],r=[{id:`b1`,severity:`high`,title:`Rechaza RD$100,000 aunque es el límite permitido (BUG-001 de tu plan: “<” en lugar de “<=”)`,where:`Monto · límite superior`},{id:`b2`,severity:`medium`,title:`Acepta transferir RD$0`,where:`Monto · límite inferior`},{id:`b3`,severity:`medium`,title:`Acepta montos con 3 decimales (1.005)`,where:`Monto · formato`},{id:`b4`,severity:`medium`,title:`Permite transferir a la misma cuenta de origen`,where:`Cuenta destino`},{id:`b5`,severity:`high`,title:`Si el monto tiene centavos, el saldo no se descuenta`,where:`Saldo`},{id:`b6`,severity:`low`,title:`El historial muestra la fecha como MM/DD y el resto de la app usa DD/MM`,where:`Historial`},{id:`b7`,severity:`low`,title:`La descripción se corta en silencio a 20 caracteres sin avisar`,where:`Descripción`}],i=[{id:`lab-classify`,level:1,type:`classify`,minutes:15,roadmap:`levels-types`,plan:`M1`,title:`Clasifica 10 escenarios (Ejercicio A de tu plan)`,instructions:`Para cada escenario elige el nivel (unitaria, integración, sistema o aceptación) y el tipo de prueba. Al enviar verás la corrección con el solucionario de tu plan.`},{id:`lab-sevpri`,level:1,type:`choices`,minutes:10,roadmap:`defects`,plan:`M1`,title:`Severidad vs. prioridad`,instructions:`Elige la combinación más razonable para cada defecto. La severidad mide el impacto técnico; la prioridad, la urgencia de negocio.`,questions:[{q:`El logo de la empresa aparece pixelado en la página de inicio el día de un lanzamiento.`,answer:2,why:`No rompe ninguna función (baja severidad), pero afecta la imagen justo en el lanzamiento (alta prioridad).`},{q:`La app se cierra al exportar un reporte anual que solo usa un cliente una vez al año.`,answer:1,why:`Un cierre inesperado es grave (alta severidad), pero su uso es raro y no urgente hoy (baja prioridad).`},{q:`Nadie puede pagar con tarjeta en el checkout.`,answer:0,why:`Bloquea la función principal del negocio: alta severidad y alta prioridad.`},{q:`Un texto de ayuda tiene una falta de ortografía en una pantalla de configuración avanzada.`,answer:3,why:`Cosmético y poco visible: baja severidad y baja prioridad.`},{q:`El total del carrito no suma el ITBIS cuando hay 2 o más productos (SHOP-112).`,answer:0,why:`Cobra mal a los clientes y tiene riesgo legal y económico: alta y alta.`},{q:`En un navegador que usa el 0.5 % de los clientes, un botón queda 2 px desalineado.`,answer:3,why:`Impacto visual mínimo para muy pocos usuarios.`}],options:[`Severidad alta · Prioridad alta`,`Severidad alta · Prioridad baja`,`Severidad baja · Prioridad alta`,`Severidad baja · Prioridad baja`]},{id:`lab-ep`,level:2,type:`partitions`,minutes:10,roadmap:`test-design`,plan:`M1`,title:`Partición de equivalencia`,instructions:`Para cada campo, escribe UN valor representante de cada partición: inválida por debajo, válida e inválida por encima.`,specs:[{label:`Edad para abrir una cuenta`,min:18,max:65,unit:`años`},{label:`Cantidad de un producto en el carrito`,min:1,max:99,unit:`unidades`},{label:`Longitud de la contraseña`,min:8,max:20,unit:`caracteres`}]},{id:`lab-bva`,level:2,type:`boundaries`,minutes:15,roadmap:`test-design`,plan:`M1`,title:`Valores límite (Ejercicio B de tu plan y más)`,instructions:`Escribe los valores frontera que probarías, separados por comas o espacios. Primero con 2 valores por frontera y después con 3, como enseña el CTFL v4.`,specs:[{label:`Transferencia de RD$1 a RD$100,000, ambos incluidos (Ejercicio B de tu plan)`,min:1,max:1e5,step:1},{label:`Edad de 18 a 65 años`,min:18,max:65,step:1},{label:`Monto con centavos de RD$1.00 a RD$500.00`,min:1,max:500,step:.01}]},{id:`lab-decision`,level:3,type:`decision`,minutes:15,roadmap:`test-design`,plan:`M1`,title:`Tablas de decisión`,instructions:`Completa la acción de cada regla (columna). Cada combinación de condiciones es un caso de prueba.`,tables:[{name:`Descuentos de la tienda`,conditions:[`Cliente VIP`,`Compra mayor a RD$1,000`],actions:[`15 %`,`10 %`,`0 %`],rules:[`15 %`,`10 %`,`10 %`,`0 %`],why:`VIP o compra grande → 10 %; ambas → 15 %; ninguna → 0 %.`},{name:`Inicio de sesión`,conditions:[`Usuario válido`,`Contraseña válida`,`Cuenta bloqueada`],actions:[`Acceso`,`Error de credenciales`,`Mensaje de cuenta bloqueada`],rules:[`Mensaje de cuenta bloqueada`,`Acceso`,`Error de credenciales`,`Error de credenciales`,`Error de credenciales`,`Error de credenciales`,`Error de credenciales`,`Error de credenciales`],why:`Solo con credenciales válidas se informa el bloqueo; con credenciales inválidas se muestra el mismo error genérico para no revelar qué cuentas existen (buena práctica de seguridad).`}]},{id:`lab-states`,level:3,type:`choices`,minutes:10,roadmap:`test-design`,plan:`M1`,title:`Transición de estados: un pedido`,instructions:`Estados: Creado, Pagado, Enviado, Entregado, Cancelado. Transiciones válidas: Creado→Pagado, Creado→Cancelado, Pagado→Enviado, Pagado→Cancelado, Enviado→Entregado. Decide si cada transición es válida o inválida.`,options:[`Válida`,`Inválida (debe rechazarse)`],questions:[{q:`Creado → Pagado`,answer:0,why:`Es el flujo normal.`},{q:`Entregado → Pagado`,answer:1,why:`Un pedido entregado no puede volver a un estado anterior.`},{q:`Enviado → Cancelado`,answer:1,why:`Según las reglas, solo se cancela antes de enviarse.`},{q:`Pagado → Cancelado`,answer:0,why:`Está permitido cancelar un pedido pagado (con reembolso).`},{q:`Creado → Enviado`,answer:1,why:`No se puede enviar sin pagar: salta un estado.`},{q:`Cancelado → Pagado`,answer:1,why:`Cancelado es un estado final.`},{q:`¿Cuántos casos mínimos (cada uno empieza en Creado) cubren las 5 transiciones válidas?`,options:[`1`,`2`,`3`,`5`],answer:2,why:`Creado→Pagado→Enviado→Entregado; Creado→Cancelado; Creado→Pagado→Cancelado. Cancelado y Entregado son finales, así que se necesitan 3 recorridos.`}]},{id:`lab-testcases`,level:3,type:`testcases`,minutes:30,roadmap:`test-docs`,plan:`M1`,title:`Escribe casos de prueba: login de SauceDemo`,instructions:`Escribe al menos 5 casos para el login de saucedemo.com (usuarios: standard_user, locked_out_user, problem_user; contraseña: secret_sauce). Usa el formato de tu plan: ID, título, precondiciones, pasos, datos, resultado esperado y prioridad.`},{id:`lab-bugreport`,level:4,type:`bugreport`,minutes:20,roadmap:`defects`,plan:`M1`,title:`Reporta un bug: SHOP-112`,instructions:`Te asignan la historia SHOP-112, “ver el total con impuestos antes de pagar”. Al probar en Chrome 140 · Windows 11 (ambiente QA) con standard_user: si agregas 2 productos y vas al resumen, el total es igual al subtotal, sin el ITBIS del 18 %. Con 1 producto sí lo suma. Escribe el reporte completo.`,expectedSeverity:`high`,expectedPriority:`high`},{id:`lab-hunt`,level:4,type:`hunt`,app:`tienda`,minutes:25,roadmap:`test-execution`,plan:`M1`,title:`Bug hunting: TiendaQA`,instructions:`TiendaQA es una tienda ficticia con 8 defectos sembrados. Explórala como cliente y como QA: precios, cantidades, cupón QA10, email y checkout. Anota cada hallazgo; al terminar se revelan los defectos y marcas cuáles encontraste.`},{id:`lab-explore`,level:5,type:`hunt`,app:`banco`,minutes:15,timed:!0,roadmap:`test-execution`,plan:`M1`,title:`Sesión exploratoria con charter: BancoQA`,charter:`Explora las transferencias a terceros de BancoQA con montos en los límites y datos inválidos para descubrir errores de validación y de cálculo del saldo.`,instructions:`Sesión de 15 minutos con el charter de arriba. Toma notas mientras exploras. Al terminar (o al acabarse el tiempo) se revelan los 7 defectos sembrados.`}],a=Object.fromEntries(i.map(e=>[e.id,e])),o=[{host:`jsonplaceholder.typicode.com`,base:`https://jsonplaceholder.typicode.com`,note:`Simula escrituras: POST/PUT/PATCH/DELETE responden, pero no guardan nada.`,docs:`https://jsonplaceholder.typicode.com/guide/`},{host:`dummyjson.com`,base:`https://dummyjson.com`,note:`Productos, usuarios y carritos de ejemplo. Las escrituras también se simulan en su servidor.`,docs:`https://dummyjson.com/docs`}],s=[{term:`GET`,body:`Lee un recurso o una lista. No cambia nada en el servidor (seguro) y repetirlo da lo mismo (idempotente). Respuesta típica: 200, o 404 si no existe.`},{term:`POST`,body:`Crea un recurso. No es idempotente: dos POST iguales pueden crear dos registros. Respuesta típica: 201 Created con el recurso y, a veces, el header Location.`},{term:`PUT`,body:`Reemplaza el recurso completo: debes enviar todos los campos. Es idempotente. Respuesta: 200 (o 204).`},{term:`PATCH`,body:`Modifica solo los campos que envías. Útil para cambiar un estado sin reenviar todo. Respuesta: 200.`},{term:`DELETE`,body:`Elimina un recurso. Es idempotente: borrarlo otra vez no cambia el resultado (aunque la segunda vez puede responder 404). Respuesta típica: 204 No Content.`},{term:`Códigos 2xx`,body:`200 OK · 201 Created · 204 No Content (éxito sin cuerpo).`},{term:`Códigos 4xx`,body:`Error del cliente. 400 petición mal formada · 401 sin autenticar · 403 autenticado pero sin permiso · 404 no existe · 409 conflicto (duplicado) · 422 datos con formato válido pero que no cumplen las reglas.`},{term:`Códigos 5xx`,body:`Error del servidor (500, 502, 503). Para QA casi siempre es un bug: la API no debería caerse con ningún dato que le envíes.`},{term:`Headers`,body:`Metadatos de la petición o respuesta. Content-Type: application/json dice el formato; Authorization: Bearer <token> te identifica.`},{term:`Qué validar`,body:`Código de estado, tiempo de respuesta, headers, estructura (campos y tipos), valores concretos y reglas de negocio. Probar solo el 200 no es probar una API.`}],c=[{id:`api-get`,method:`GET`,title:`GET: lee la reserva 1`,goal:`Pide la reserva con id 1 y comprueba con asserts que responde 200 y que "huesped" es un texto.`,expect:{target:`mock`,method:`GET`,path:/^\/reservas\/1$/,status:200},asserts:[`status`,`body`]},{id:`api-get-404`,method:`GET`,title:`GET: un recurso que no existe`,goal:`Pide la reserva 99. Un buen QA también prueba el camino triste: comprueba el 404 y que el cuerpo trae un campo "error".`,expect:{target:`mock`,method:`GET`,path:/^\/reservas\/99$/,status:404},asserts:[`status`,`body`]},{id:`api-401`,method:`POST`,title:`Seguridad: crear sin token`,goal:`Intenta crear una reserva SIN el header Authorization. La API debe rechazarte con 401. Agrega un assert de status.`,expect:{target:`mock`,method:`POST`,path:/^\/reservas$/,status:401,auth:!1},asserts:[`status`]},{id:`api-post`,method:`POST`,title:`POST: crea una reserva`,goal:`Haz login (POST /auth/login con usuario "qa" y password "qa123", credenciales de práctica de esta simulación), copia el token en Authorization: Bearer <token> y crea una reserva válida. Comprueba 201 y que la respuesta trae un "id".`,expect:{target:`mock`,method:`POST`,path:/^\/reservas$/,status:201,auth:!0},asserts:[`status`,`body`]},{id:`api-post-422`,method:`POST`,title:`POST: datos inválidos`,goal:`Con token, envía una reserva con noches: 0 o sin fecha. La API debe responder 422 con el detalle de los errores. Comprueba el 422 y que existe "detalle".`,expect:{target:`mock`,method:`POST`,path:/^\/reservas$/,status:422,auth:!0},asserts:[`status`,`body`]},{id:`api-put`,method:`PUT`,title:`PUT: reemplaza la reserva 2`,goal:`Con token, reemplaza la reserva 2 enviando TODOS los campos (huesped, habitacion, fecha, noches). Comprueba 200 y un valor que cambiaste.`,expect:{target:`mock`,method:`PUT`,path:/^\/reservas\/2$/,status:200,auth:!0},asserts:[`status`,`body`]},{id:`api-patch`,method:`PATCH`,title:`PATCH: confirma la reserva 2`,goal:`Con token, cambia solo el estado de la reserva 2 a "confirmada". Comprueba 200 y que estado es igual a confirmada.`,expect:{target:`mock`,method:`PATCH`,path:/^\/reservas\/2$/,status:200,auth:!0},asserts:[`status`,`body`]},{id:`api-delete`,method:`DELETE`,title:`DELETE: borra la reserva 3`,goal:`Con token, elimina la reserva 3. Comprueba el 204. Después haz GET /reservas/3 por tu cuenta para confirmar que ya no existe.`,expect:{target:`mock`,method:`DELETE`,path:/^\/reservas\/3$/,status:204,auth:!0},asserts:[`status`]},{id:`api-real`,method:`GET`,title:`API real: JSONPlaceholder`,goal:`Haz una petición REAL a https://jsonplaceholder.typicode.com/users/1. Comprueba 200, que "email" es un texto y que el tiempo de respuesta es menor a 3000 ms.`,expect:{target:`real`,method:`GET`,path:/^\/users\/1$/,status:200},asserts:[`status`,`body`,`time`]}],l=[{id:`json-user`,title:`Contrato de usuario`,contract:`GET /usuarios/7 → 200 con { id: número, nombre: texto, email: texto con @, activo: booleano, roles: lista de textos, creado: fecha ISO 8601 válida }`,lines:[`{`,`  "id": "7",`,`  "nombre": "Carla Ruiz",`,`  "email": "carla.ruiz.example.com",`,`  "activo": "true",`,`  "roles": ["qa", "admin"],`,`  "creado": "2026-02-30T10:00:00Z"`,`}`],errors:{2:`"7" es un texto; el contrato pide un número (7).`,4:`El email no tiene @.`,5:`"true" entre comillas es texto, no booleano.`,7:`El 30 de febrero no existe: la fecha no es válida.`}},{id:`json-list`,title:`Lista paginada de productos`,contract:`GET /productos?pagina=1 → { total: número de elementos en data, pagina: número, data: lista de { id único, producto, precio > 0 }, siguiente: URL o null }`,lines:[`{`,`  "total": 4,`,`  "pagina": 1,`,`  "data": [`,`    { "id": 1, "producto": "Teclado", "precio": 1500 },`,`    { "id": 2, "producto": "Monitor", "precio": -9800 },`,`    { "id": 2, "producto": "Mouse", "precio": 1200 }`,`  ],`,`  "siguiente": null`,`}`],errors:{2:`total dice 4, pero data trae 3 elementos.`,6:`El precio es negativo.`,7:`El id 2 está repetido.`}},{id:`json-status`,title:`Un error disfrazado de éxito`,contract:`GET /reservas/99 (no existe) → 404 con Content-Type: application/json y { error: texto }`,lines:[`HTTP/1.1 200 OK`,`Content-Type: text/html`,``,`{`,`  "error": "Reserva no encontrada",`,`  "codigo": 404`,`}`],errors:{1:`Responde 200 aunque el recurso no existe: debería ser 404 (un cliente que solo mira el status creería que todo fue bien).`,2:`El cuerpo es JSON, pero el header dice text/html.`}}],u=[...c,...l],d=[{id:`selectors`,title:`Selectores`,module:`M5`,summary:`CSS y XPath funcionan, pero dependen de la estructura del DOM. Playwright recomienda localizadores orientados al usuario (rol, texto, label) y, si no hay, un data-testid.`,code:`// ❌ Frágil: depende de la posición en el DOM
page.locator('//div[2]/form/div[3]/input')

// ⚠️ Válido, pero se rompe si cambian el id o la clase
page.locator('#login-button')

// ✅ Lo que ve el usuario: sobrevive a cambios de maquetación
page.getByRole('button', { name: 'Login' })

// ✅ Contrato explícito con el equipo de desarrollo
page.getByTestId('login-button')`,challenges:[{type:`mcq`,q:`¿Cuál es el localizador más resistente para el botón “Login”?`,options:[`page.locator('//div[2]/form/input[3]')`,`page.locator('.btn_action')`,`page.getByRole('button', { name: 'Login' })`,`page.locator('input >> nth=2')`],answer:2,why:`getByRole usa el rol accesible y el nombre visible: no depende de la estructura ni de clases de estilo.`},{type:`mcq`,q:`Un XPath absoluto como //div[2]/form/input[3] es mala idea porque…`,options:[`Es más lento que CSS en todos los casos`,`Se rompe con cualquier cambio de estructura, aunque la funcionalidad no cambie`,`Playwright no soporta XPath`,`No funciona en Firefox`],answer:1,why:`Playwright sí soporta XPath; el problema es el acoplamiento a la estructura, que causa tests frágiles (falsos fallos).`}]},{id:`locators`,title:`Localizadores`,module:`M5`,summary:`getByRole, getByLabel, getByPlaceholder, getByText y getByTestId. Son perezosos (se resuelven al usarlos) y estrictos: si encuentran 2+ elementos en una acción, fallan.`,code:`import { test, expect } from '@playwright/test'

test('login con usuario válido', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')
  // Por placeholder: el campo no tiene <label>
  await page.getByPlaceholder('Username').fill('standard_user')
  // Por data-test: requiere use: { testIdAttribute: 'data-test' } en playwright.config.ts
  await page.getByTestId('password').fill('secret_sauce')
  // Por rol y nombre accesible (un <input type="submit" value="Login"> es un botón)
  await page.getByRole('button', { name: 'Login' }).click()
  await expect(page).toHaveURL(/inventory/)
})`,challenges:[{type:`blanks`,template:`await page.{{0}}('Username').fill('standard_user')
await page.{{1}}('password').fill('secret_sauce') // data-test
await page.getByRole({{2}}, { name: 'Login' }).click()`,blanks:[{accept:[`getByPlaceholder`]},{accept:[`getByTestId`]},{accept:[`'button'`]}]},{type:`mcq`,q:`Playwright lanza “strict mode violation” cuando…`,options:[`El elemento tarda más de 30 s`,`El localizador encuentra más de un elemento al hacer una acción`,`Usas CSS en lugar de getByRole`,`El test no tiene asserts`],answer:1,why:`Los localizadores son estrictos: si hay 2+ coincidencias, no adivina cuál querías. Hazlo más específico o usa .first() / .nth() a conciencia.`}]},{id:`assertions`,title:`Assertions`,module:`M5`,summary:`Las web-first assertions (await expect(locator).toBeVisible()) reintentan hasta que se cumplen o vence el timeout. Así evitas esperas fijas y tests inestables.`,code:`// ✅ Web-first: reintenta automáticamente (5 s por defecto)
await expect(page).toHaveURL(/inventory/)
await expect(page.getByText('Products')).toBeVisible()
await expect(page.locator('.inventory_item')).toHaveCount(6)
await expect(page.getByTestId('error')).toContainText('locked out')

// ❌ Sin reintento: lee el estado UNA vez y puede fallar por timing
expect(await page.getByText('Products').isVisible()).toBe(true)`,challenges:[{type:`blanks`,template:`await expect(page).{{0}}(/inventory/)
await expect(page.getByText('Products')).{{1}}()
await expect(page.locator('.inventory_item')).{{2}}(6)`,blanks:[{accept:[`toHaveURL`]},{accept:[`toBeVisible`]},{accept:[`toHaveCount`]}]},{type:`mcq`,q:`¿Por qué await expect(locator).toBeVisible() es mejor que expect(await locator.isVisible()).toBe(true)?`,options:[`Es más corto`,`Reintenta hasta el timeout, así no falla si el elemento tarda un poco en aparecer`,`isVisible() no existe`,`No hay diferencia`],answer:1,why:`isVisible() devuelve el estado en ese instante; la web-first assertion espera. La segunda forma causa tests “flaky”.`}]},{id:`actions`,title:`Acciones`,module:`M6`,summary:`click, fill, check, selectOption, press, hover… Antes de actuar, Playwright espera a que el elemento sea visible, estable, habilitado y reciba eventos (auto-waiting).`,code:`await page.getByPlaceholder('Username').fill('standard_user') // borra y escribe
await page.getByRole('checkbox', { name: 'Recordarme' }).check()
await page.getByRole('combobox').selectOption('lohi')             // ordenar por precio
await page.getByPlaceholder('Buscar').press('Enter')
await page.getByText('Sauce Labs Backpack').hover()

// ❌ Nunca: espera fija. Hace los tests lentos y aun así inestables.
// await page.waitForTimeout(3000)`,challenges:[{type:`order`,q:`Ordena los pasos de un test de login.`,items:[{id:`goto`,text:`await page.goto('https://www.saucedemo.com/')`},{id:`user`,text:`await page.getByPlaceholder('Username').fill('standard_user')`},{id:`pass`,text:`await page.getByPlaceholder('Password').fill('secret_sauce')`},{id:`click`,text:`await page.getByRole('button', { name: 'Login' }).click()`},{id:`assert`,text:`await expect(page).toHaveURL(/inventory/)`}]},{type:`mcq`,q:`¿Qué hace Playwright antes de un click()?`,options:[`Nada: hace clic de inmediato`,`Espera 1 segundo fijo`,`Espera a que el elemento sea accionable (visible, estable, habilitado)`,`Recarga la página`],answer:2,why:`Es el auto-waiting: por eso no necesitas waitForTimeout.`}]},{id:`hooks`,title:`Hooks y agrupación`,module:`M6`,summary:`test.describe agrupa; test.beforeEach / afterEach corren antes y después de cada test; beforeAll / afterAll una vez por archivo o grupo (sin el fixture page).`,code:`import { test, expect } from '@playwright/test'

test.describe('Login', () => {
  // Cada test recibe una página nueva y aislada
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
  })

  test('usuario bloqueado ve un error', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('locked_out_user')
    await page.getByPlaceholder('Password').fill('secret_sauce')
    await page.getByRole('button', { name: 'Login' }).click()
    await expect(page.getByTestId('error')).toContainText('locked out')
  })
})`,challenges:[{type:`blanks`,template:`test.{{0}}('Login', () => {
  test.{{1}}(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
  })
})`,blanks:[{accept:[`describe`]},{accept:[`beforeEach`]}]},{type:`mcq`,q:`¿Por qué no se usa beforeAll para hacer page.goto()?`,options:[`beforeAll no existe`,`El fixture page es por test: no está disponible en beforeAll`,`Es más lento`,`Solo funciona en Chromium`],answer:1,why:`page se crea para cada test (aislamiento). En beforeAll solo tienes fixtures de alcance worker, como browser.`}]},{id:`fixtures`,title:`Fixtures`,module:`M7`,summary:`Un fixture prepara lo que el test necesita y lo limpia después. test.extend crea fixtures propios: el código antes de use() es setup y el de después es teardown.`,code:`import { test as base } from '@playwright/test'
import { LoginPage } from './pages/LoginPage'

type Fixtures = { loginPage: LoginPage }

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()      // setup
    await use(loginPage)        // aquí corre el test
    // teardown (si hiciera falta) va después de use()
  },
})

// En el test: test('...', async ({ loginPage }) => { await loginPage.login('standard_user', 'secret_sauce') })`,challenges:[{type:`blanks`,template:`export const test = base.{{0}}<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await {{1}}(loginPage)
  },
})`,blanks:[{accept:[`extend`]},{accept:[`use`]}]},{type:`mcq`,q:`El código escrito DESPUÉS de await use(x) en un fixture…`,options:[`Nunca se ejecuta`,`Se ejecuta antes del test`,`Se ejecuta al terminar el test (teardown)`,`Lanza un error`],answer:2,why:`use() cede el control al test; cuando el test termina, el fixture continúa y limpia.`}]},{id:`pom`,title:`Page Object Model`,module:`M7`,summary:`Cada página es una clase con sus localizadores y acciones. Los tests leen como pasos de negocio y, si cambia la UI, se corrige en un solo lugar.`,code:`import { type Page, type Locator } from '@playwright/test'

export class LoginPage {
  readonly username: Locator
  readonly password: Locator
  readonly submit: Locator

  constructor(private readonly page: Page) {
    this.username = page.getByPlaceholder('Username')
    this.password = page.getByPlaceholder('Password')
    this.submit = page.getByRole('button', { name: 'Login' })
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/')
  }

  async login(user: string, pass: string) {
    await this.username.fill(user)
    await this.password.fill(pass)
    await this.submit.click()
  }
}`,challenges:[{type:`mcq`,q:`Encuentra el bug:

async login(user: string, pass: string) {
  this.username.fill(user)
  this.password.fill(pass)
  await this.submit.click()
}`,options:[`Falta await en los dos fill(): pueden no terminar antes del click`,`fill() no existe en Locator`,`login debería ser estático`,`No hay ningún bug`],answer:0,why:`Sin await, las promesas de fill() quedan sueltas y el click puede ocurrir con los campos vacíos. El linter @typescript-eslint/no-floating-promises lo detecta.`},{type:`mcq`,q:`¿Cuál es la principal ventaja del POM?`,options:[`Los tests corren más rápido`,`Si cambia un localizador, lo corriges en un solo lugar`,`No necesitas asserts`,`Evita usar TypeScript`],answer:1,why:`Centraliza localizadores y acciones: mantenimiento barato y tests legibles.`}]},{id:`reports`,title:`Reportes y trazas`,module:`M9`,summary:`El reporter HTML muestra cada test con pasos, capturas y trazas. Con trace: "on-first-retry" guardas una traza completa solo cuando un test falla y se reintenta.`,code:`// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  retries: process.env.CI ? 2 : 0,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://www.saucedemo.com',
    testIdAttribute: 'data-test',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
})

// Terminal: npx playwright show-report`,challenges:[{type:`blanks`,template:`reporter: [['{{0}}'], ['list']],
use: {
  trace: '{{1}}',
  screenshot: 'only-on-failure',
}`,blanks:[{accept:[`html`]},{accept:[`on-first-retry`,`retain-on-failure`,`on`]}]},{type:`mcq`,q:`¿Qué comando abre el reporte HTML del último run?`,options:[`npx playwright report`,`npx playwright show-report`,`npm run report`,`npx playwright open`],answer:1,why:`npx playwright show-report sirve la carpeta playwright-report.`}]},{id:`debugging`,title:`Depuración`,module:`M6`,summary:`UI Mode (--ui) para ver y re-ejecutar tests con línea de tiempo; Inspector (--debug) para ir paso a paso; Trace Viewer para analizar un fallo de CI.`,code:`# Ejecuta con interfaz: línea de tiempo, DOM de cada paso, watch mode
npx playwright test --ui

# Paso a paso con el Inspector (pausa antes de cada acción)
npx playwright test login.spec.ts --debug

# Abre la traza que dejó un fallo en CI
npx playwright show-trace test-results/…/trace.zip

# Genera código grabando tus clics
npx playwright codegen https://www.saucedemo.com/

// Dentro de un test: pausa en ese punto
await page.pause()`,challenges:[{type:`mcq`,q:`Un test falló en CI y tienes el trace.zip. ¿Qué usas?`,options:[`npx playwright codegen`,`npx playwright show-trace trace.zip`,`console.log en el test`,`Reinstalar los navegadores`],answer:1,why:`El Trace Viewer muestra cada acción con capturas, DOM, red y consola: es la mejor evidencia para un bug report.`},{type:`mcq`,q:`¿Qué hace await page.pause()?`,options:[`Espera 1 segundo`,`Detiene el test y abre el Inspector en ese punto`,`Cierra el navegador`,`Marca el test como omitido`],answer:1,why:`Útil para inspeccionar el estado exacto de la página (en modo headed o --debug).`}]},{id:`api`,title:`API testing con Playwright`,module:`M8`,summary:`El fixture request hace peticiones HTTP sin navegador. Sirve para probar APIs o para preparar datos rápido antes de un test de UI.`,code:`import { test, expect } from '@playwright/test'

test('crea un post', async ({ request }) => {
  const res = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: 'QA', body: 'Hola', userId: 1 },
  })
  expect(res.status()).toBe(201)
  const json = await res.json()
  expect(json).toMatchObject({ title: 'QA', userId: 1 })
  expect(typeof json.id).toBe('number')
})`,challenges:[{type:`blanks`,template:`const res = await request.{{0}}('https://jsonplaceholder.typicode.com/posts', {
  {{1}}: { title: 'QA', userId: 1 },
})
expect(res.status()).toBe({{2}})`,blanks:[{accept:[`post`]},{accept:[`data`]},{accept:[`201`]}]},{type:`mcq`,q:`¿Para qué sirve combinar request con tests de UI?`,options:[`Para no usar asserts`,`Para crear o limpiar datos por API antes del test: más rápido y estable que hacerlo por la UI`,`Es obligatorio`,`Para evitar el login siempre`],answer:1,why:`Preparar datos por API reduce tiempo y puntos de fallo; la UI se prueba donde importa.`}]},{id:`cicd`,title:`CI/CD con GitHub Actions`,module:`M9`,summary:`En cada push o pull request, el pipeline instala dependencias y navegadores, ejecuta la suite y publica el reporte como artefacto.`,code:`# .github/workflows/playwright.yml
name: Playwright
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: lts/* }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: always()
        with: { name: playwright-report, path: playwright-report/ }`,challenges:[{type:`order`,q:`Ordena los pasos del pipeline.`,items:[{id:`checkout`,text:`actions/checkout (descargar el código)`},{id:`node`,text:`actions/setup-node (instalar Node)`},{id:`ci`,text:`npm ci (dependencias exactas del lockfile)`},{id:`browsers`,text:`npx playwright install --with-deps`},{id:`test`,text:`npx playwright test`},{id:`upload`,text:`upload-artifact con if: always()`}]},{type:`mcq`,q:`¿Por qué el paso de subir el reporte lleva if: always()?`,options:[`Para que corra más rápido`,`Para subir el reporte también cuando los tests fallan, que es cuando más lo necesitas`,`Es obligatorio en todos los pasos`,`Para saltarse los tests`],answer:1,why:`Sin always(), un test fallido detiene el job y no tendrías el reporte para investigar.`}]}],f=[{id:`user`,text:`El campo de usuario`,target:`user`,hint:`getByPlaceholder('Username')`},{id:`pass`,text:`El campo de contraseña`,target:`pass`,hint:`getByTestId('password') · data-test`},{id:`login`,text:`El botón Login (¡hay otro botón parecido!)`,target:`login`,hint:`getByRole('button', { name: 'Login', exact: true })`},{id:`error`,text:`El mensaje de error`,target:`error`,hint:`getByText('Username is required')`},{id:`add2`,text:`El botón “Agregar al carrito” del SEGUNDO producto`,target:`add2`,hint:`getByRole('button', { name: 'Agregar al carrito' }).nth(1)`},{id:`remember`,text:`La casilla “Recordarme”`,target:`remember`,hint:`getByLabel('Recordarme')`}],p=[...d.map(e=>({id:`auto-${e.id}`,title:e.title,topic:e})),{id:`auto-locator-lab`,title:`Laboratorio de localizadores`}];export{c as a,r as c,e as d,t as f,s as i,a as l,f as n,l as o,n as p,u as r,o as s,p as t,i as u};