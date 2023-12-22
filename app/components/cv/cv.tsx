import cn from 'classnames';
import Image from "next/image";

import styles from './cv.module.scss'
import {H, HTypeEnum} from "../htmlTags";
import {Span} from "../htmlTags/span/span";

export const Cv = (): JSX.Element => {
  return (
    <div>
      <header className={styles.header}>
        <div className={cn(styles.headerContent, styles.headerGrid)}>
          <div className={cn(styles.infoBlock, styles.nameBox)}>
            <div>
              <H type={HTypeEnum.h1}>Ramis</H>
              <H type={HTypeEnum.h1}>Vakazov</H>
            </div>
          </div>
          <div className={cn(styles.contactBlock, styles.contactBox)}>
            <div className={styles.contact}>
              <i className={cn(styles.icon, styles.phoneIcon)}/>
              <span className={styles.contactText}>+49 160 98764756</span>
            </div>
            <div className={styles.contact}>
              <i className={cn(styles.icon, styles.emailIcon)}/>
              <span className={styles.contactText}><a
                href="mailto:rvakazov@gmail.com?subject=Vacancy">rvakazov@gmail.com</a></span>
            </div>
            <div className={styles.contact}>
              <i className={cn(styles.icon, styles.addressIcon)}/>
              <span className={styles.contactText}>Berlin, Boyenstraẞe 36</span>
            </div>
          </div>
          <div className={cn(styles.position, styles.positionBox)}>
            <span>Senior AQA/SDET specialist</span>
          </div>
          <div className={cn(styles.image, styles.imageBox)}>
            <Image alt={"Logo"} width={225} height={225} src={'/my_bw_photo.png'}/>
          </div>
        </div>
      </header>
      <main className={styles.layout}>
        <article className={cn(styles.article)}>
          <H type={HTypeEnum.h2}>About me</H>
          <Span className={styles.italicText}>
            I do both automation and manual testing:
            <br/>
            <ul className={styles.list}>
              <li>have a lot of experience with <b>js/ts</b> based frameworks for ui automation testing: <b>playwright, puppeteer, protractor</b></li>
              <li>automated mobile apps testing using <b>webdriverIo, appium and mochaJs</b></li>
              <li>developed <b>rest api</b> automation tests using only <b>axios + jest</b></li>
              <li>implemented slack bots using slack API to check gitlab MRs and what website is available by schedule</li>
              <li>developed services for QA needs like an <b>allure / html-reports hub</b> to see reports after running tests on ci,
                or test devices management system. Backend on <b>ExpressJS / NestJS</b>, frontend on <b>ReactJS + redux-toolkit</b></li>
            </ul>
          </Span>
        </article>
        <div className={styles.educationAndSkills}>
          <article className={styles.article}>
            <H type={HTypeEnum.h2} className={styles.withMargin}>Education</H>
            <div className={styles.periodBlock}>
              <H type={HTypeEnum.h4} className={styles.italicText}>2006 — 2011</H>
              <H type={HTypeEnum.h3}>Ulyanovsk State University</H>
              <H type={HTypeEnum.h4}>Applied Mathematics, Mathematician</H>
            </div>
          </article>
          <article className={styles.article}>
            <H type={HTypeEnum.h2} className={styles.withMargin}>Skills</H>
            <Span>
              <ul className={styles.skillsList}>
                <li><span className={styles.boldText}>Manual testing</span></li>
                <li><span className={styles.boldText}>API testing</span></li>
                <li><span className={styles.boldText}>Test documentation</span></li>
                <li><span className={styles.boldText}>Automation testing:</span> api testing, web ui testing,
                  slack/telegram bots, allure hub
                </li>
              </ul>
              <br/>
              <span className={styles.boldText}>JS/TS:</span> webdriverio, appium, playwright, puppeteer, protractor, axios, jest, allure.
              <br/>
              <span className={styles.boldText}>Dev:</span> ExpressJS, NestJS, ReactJS, redux-toolkit, rtk-query.
              <br/><br/>
              Have experience with python and java.
            </Span>
          </article>
        </div>
        <H type={HTypeEnum.h2} className={styles.withMargin}>Work History</H>
        <article className={cn(styles.article)}>
          <div className={styles.workHistory}>
            <div>
              <div className={styles.periodBlock}>
                <H type={HTypeEnum.h5} className={styles.italicText}>
                  June 2022 —
                  <br/>
                  current
                </H>
                <H type={HTypeEnum.h3}>Go-e Labs</H>
                <H type={HTypeEnum.h4}>QA Engineer</H>
              </div>
            </div>
            <Span>
              <b>My responsibilities:</b>
              <ul className={styles.list}>
                <li>Manual and automation (E2E) testing of website and mobile apps</li>
                <li>All kinds of manual testing: functional, regression, smoke, acceptance, usability and other</li>
                <li>Automation testing: mobile apps and web UI</li>
                <li>Code review of other js/ts QA specialists</li>
                <li>CI integration on gitlab ci</li>
                <li>Reviewing the design, discussing new features with the team</li>
              </ul>
              <br/>
              <b>Tools:</b> charles proxy, postman, docker, playwright, jest, webdriver io, appium, mochaJS, allure, NestJS,
              ReactJS, websocket, @slack/bolt.
              <br/><br/>
              Tested marketing website of the company. Implemented the full coverage with automation tests using
              Playwright and Jest (jest-circus), and allure-reporter.
              <br/><br/>
              Tested mobile apps (written on RN, android and ios versions). Implemented on WebdriverIO + Appium an automation
              tests framework. For this framework I also implemented:
              <ul className={styles.list}>
                <li>downloading and installing builds from AppCenter using AppCenter API and axios</li>
                <li>chargers cloud API usage by connecting over websocket to the chargers</li>
                <li>automatic screenshots and video recording for failed/broken tests</li>
                <li>test wrapper to divide tests on real devices and emulators/simulators</li>
              </ul>
              <br/><br/>
              Developed the app for adding and checking test chargers statuses using NestJS, ReactJS and redux-toolkit.
              <br/><br/>
              Implemented slack bot to check not approved MRs in different projects and sent information about project and
              link to MR to related slack channel.
            </Span>
          </div>
        </article>
        <article className={cn(styles.article)}>
          <div className={styles.workHistory}>
            <div>
              <div className={styles.periodBlock}>
                <H type={HTypeEnum.h5} className={styles.italicText}>
                  February 2017 —
                  <br/>
                  May 2022
                </H>
                <H type={HTypeEnum.h3}>RTK IT</H>
                <H type={HTypeEnum.h4}>QA Engineer</H>
              </div>
            </div>
            <Span>
              <b>My responsibilities:</b>
              <ul className={styles.list}>
                <li>Manual and automation (E2E) testing of the main web site of our department https://wink.ru, its
                  mobile adaptation and admin panels
                </li>
                <li>All kinds of manual testing: functional, regression, smoke, acceptance, usability and other</li>
                <li>Automation testing: rest api and web UI</li>
                <li>Code review of other js/ts testers</li>
                <li>CI integration on gitlab ci. Run tests from docker container on ci or from local machine</li>
                <li>Discussed new features with other team members</li>
              </ul>
              <br/>
              <b>Tools:</b> charles proxy, fiddler, postman, docker, virtual box. Mockiavelli for mocking request in
              auto tests.
              <br/><br/>
              On this project I used playwright + jest to implement auto tests for regression testing.
              <br/><br/>
              Implemented api tests with axios + jest to check if api wasn’t changed or its changes didn’t affect on ui.
              <br/><br/>
              Develop slack bot to run tests from slack. Using express js as a server for slack commands. Running bot in
              docker container. It runs tests on the same server.
              <br/><br/>
              Develop allure-reports hub. Used express js for backend and reactjs + redux on fronend.
            </Span>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.workHistory}>
            <div>
              <div className={styles.periodBlock}>
                <H type={HTypeEnum.h5} className={styles.italicText}>
                  June 2014 —
                  <br/>
                  february 2017
                </H>
                <H type={HTypeEnum.h3}>SimbirSoft</H>
                <H type={HTypeEnum.h4}>QA lead</H>
              </div>
            </div>
            <Span>
              <b>My responsibilities:</b>
              <ul className={styles.list}>
                <li>all kinds of testing: regression, functional, smoke, acceptance (exclude security);
                  automation testing;
                </li>
                <li>managing a team of 3 qa;</li>
                <li>testing FrontEnd and BackEnd;</li>
                <li>wrote test documentation: test cases, check lists, test plans, use cases and other;</li>
                <li>making estimates for testing;</li>
                <li>conducted interviews with candidates;</li>
                <li>trained interns and students.</li>
              </ul>
              <br/>
              QA lead on bank services project.
              On this project we use manual and automation ui testing.
              <br/>
              Usages: java 7, selenium webdriver, junit/testng, jdbc, teamcity, allure.
              <br/><br/>
              Lead of load testing project.
              <br/>
              Usages: jmeter, AWS
            </Span>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.workHistory}>
            <div>
              <div className={styles.periodBlock}>
                <H type={HTypeEnum.h5} className={styles.italicText}>
                  November 2012 —
                  <br/>
                  march 2013
                </H>
                <H type={HTypeEnum.h3}>ITECH.group</H>
                <H type={HTypeEnum.h4}>QA engineer</H>
              </div>
            </div>
            <Span>
              <b>My responsibilities:</b>
              <ul className={styles.list}>
                <li>functional testing;</li>
                <li>regression testing;</li>
                <li>smoke testing;</li>
                <li>acceptance test;</li>
                <li>writing test documentation: test cases, use cases, check lists;</li>
                <li>also I am testing documentation and prototypes;</li>
              </ul>
            </Span>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.workHistory}>
            <div>
              <div className={styles.periodBlock}>
                <H type={HTypeEnum.h5} className={styles.italicText}>
                  October 2010 —
                  <br/>
                  december 2010
                </H>
                <H type={HTypeEnum.h3}>SimTech</H>
                <H type={HTypeEnum.h4}>QA (intern)</H>
              </div>
            </div>
            <Span>
              <b>My responsibilities:</b>
              <ul className={styles.list}>
                <li>functional testing;</li>
                <li>regression testing;</li>
                <li>smoke testing;</li>
                <li>writing test documentation: test cases, use cases, check lists;</li>
                <li>bug reports;</li>
              </ul>
            </Span>
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
        <article className={cn(styles.article)}>
          <H type={HTypeEnum.h2}>Code examples</H>
          <Span>
            <div className={styles.exampleLink}>
              <H type={HTypeEnum.h5}><b>Example of my Web UI tests on puppeteer</b></H>
              <a target="_blank" href={"https://github.com/Gorodb/jest-puppeteer-tests"} rel="noreferrer">
                https://github.com/Gorodb/jest-puppeteer-tests
              </a>
            </div>
            <div className={styles.exampleLink}>
              <H type={HTypeEnum.h5}><b>Example of my Web UI tests on playwright</b></H>
              <a target="_blank" href={"https://github.com/Gorodb/playwright-example-tests"} rel="noreferrer">
                https://github.com/Gorodb/playwright-example-tests
              </a>
            </div>
            <div className={styles.exampleLink}>
              <H type={HTypeEnum.h5}><b>My NestJS project</b></H>
              <a target="_blank" href={"https://github.com/Gorodb/nestjs-device-mon"} rel="noreferrer">
                https://github.com/Gorodb/nestjs-device-mon
              </a>
            </div>
            <div className={styles.exampleLink}>
              <H type={HTypeEnum.h5}><b>My ReactJS project</b></H>
              <a target="_blank" href={"https://github.com/Gorodb/device-holders-front"} rel="noreferrer">
                https://github.com/Gorodb/device-holders-front
              </a>
            </div>
          </Span>
        </article>
        <article className={cn(styles.article)}>
          <H type={HTypeEnum.h2}>Contact Info</H>
          <div>
            <div className={styles.contact}>
              <i className={cn(styles.darkIcon, styles.phoneIcon)}/>
              <Span>+49 160 98764756</Span>
            </div>
            <div className={styles.contact}>
              <i className={cn(styles.darkIcon, styles.emailIcon)}/>
              <Span><a href="mailto:rvakazov@gmail.com?subject=Vacancy">rvakazov@gmail.com</a></Span>
            </div>
            <div className={styles.contact}>
              <i className={cn(styles.darkIcon, styles.addressIcon)}/>
              <Span>Berlin, Boyenstraẞe 36</Span>
            </div>
          </div>
        </article>
      </footer>
    </div>
  )
}
