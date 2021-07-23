const automator = require('miniprogram-automator')

describe('index', () => {
    let miniProgram
    let page

    beforeAll(async () => {
        miniProgram = await automator.launch({
            cliPath: 'C://Program Files (x86)//Tencent//微信web开发者工具//cli.bat',// cli.bat文件一般在微信开发者工具目录下，MacOS下一般无需配置cliPath
            projectPath: './'
        })
        page = await miniProgram.reLaunch('/pages/Carousel_Demo/Carousel_Demo') // 测试页面
        await page.waitFor(500)
    }, 30000)

    // 测试脚本
    it('desc', async () => {
        const desc = await page.$('.buttom')
        expect(desc.tagName).toBe('view')
        expect(await desc.text()).toContain('上一张下一张')
    })

    afterAll(async () => {
        await miniProgram.close()
    })
})
