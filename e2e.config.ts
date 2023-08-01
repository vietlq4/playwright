import { chromium, PlaywrightTestConfig } from "@playwright/test";


const config :PlaywrightTestConfig ={
    timeout:10000,
    retries:0,
    use:{
      headless:true,
      video:'retain-on-failure',
      screenshot:'only-on-failure'
   
    },
    projects:[
      {  name:'chromium',
        use:{browserName:'chromium'}
    }

    ]
   

}
export default config