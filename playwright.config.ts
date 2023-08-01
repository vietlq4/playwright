import { chromium, PlaywrightTestConfig } from "@playwright/test";


const config :PlaywrightTestConfig ={
    timeout:6000,
    retries:1,
    use:{
      headless:false,
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