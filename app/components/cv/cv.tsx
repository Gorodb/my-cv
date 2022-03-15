import cn from 'classnames';
import Image from "next/image";

import styles from './cv.module.scss'
import {H, HTypeEnum} from "../htmlTags";
import {Span} from "../htmlTags/span/span";

export const Cv = (): JSX.Element => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.infoBlock}>
            <div>
              <H type={HTypeEnum.h1}>Ramis</H>
              <H type={HTypeEnum.h1}>Vakazov</H>
              <span className={styles.position}>QA specialist</span>
            </div>
          </div>
          <div className={styles.contactBlock}>
            <div className={styles.contact}>
              <i className={cn(styles.icon, styles.phoneIcon)} />
              <span className={styles.contactText}>+7 (908) 485-69-87</span>
            </div>
            <div className={styles.contact}>
              <i className={cn(styles.icon, styles.emailIcon)} />
              <span className={styles.contactText}>rvakazov@gmail.com</span>
            </div>
            <div className={styles.contact}>
              <i className={cn(styles.icon, styles.addressIcon)} />
              <span className={styles.contactText}>St.Petersburg, Kollontai, 6/1</span>
            </div>
          </div>
          <div className={styles.image}>
            <Image alt={"Logo"} width={225} height={225} src={'/my_bw_photo.png'} />
          </div>
        </div>
      </header>
      <main className={styles.layout}>
        <article className={cn(styles.article)}>
          <H type={HTypeEnum.h2}>General Info</H>
          <Span className={styles.italicText}>
            I enjoy testing and IT at all, have mathematicians education and love to solve problems. I work as qa specialist for last 8 years. Has experience as qa lead, manual functional tester, automation test engineer.
            <br />
            For last 5 years write autotests on js/ts for ui web and rest api tests. Using docker to run tests on Gitlab-ci. In my personal time, to solve needs in custom software I have learn ExpressJS, NestJS and ReactJS.
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
                <li><span className={styles.boldText}>Test documentation</span></li>
                <li><span className={styles.boldText}>Automation testing:</span> api testing, web ui testing, slack/telegram bots, allure hub</li>
              </ul>
              <br />
              <span className={styles.boldText}>JS/TS:</span> playwright, puppeteer, protractor, axios, jest, allure.
              <br />
              <span className={styles.boldText}>Dev:</span> ExpressJS, NestJS, ReactJS, redux, redux-toolkit, rtk-query.
              <br /><br />
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
                  February 2017 —
                  <br />
                  current
                </H>
                <H type={HTypeEnum.h3}>RTK IT</H>
                <H type={HTypeEnum.h4}>QA Engineer</H>
              </div>
            </div>
            <Span>
              Testing main web site of our department https://wink.ru and it admin panels. Wright on playwright+jest auto tests for regression testing.
              Code review of other js/ts testers.
              CI integration on gitlab ci. Run tests from docker container on ci or from local machine.
              <br /><br />
              All kinds of manual testing: functional, regression, smoke, acceptance and other.
              Automation testing: rest api and web UI.
              <br /><br />
              Using ts, playwright, jest, axios, allure-reports for ui web testing.
              I am using custom matchers to have custom error message for each test and making screenshot on failure. I use allure repots because they are more interactive then native playwright reports.
              <br /><br />
              Wrote softAssertion class for multiple assertions. Then I want to check, that ui includes all locators or smth like this. It store error messages and on method assertAll checks for errors.
              Run tests in 12 workers.
              <br /><br />
              Develop slack bot to run tests from slack. Using express js as a server for slack commands. Running bot in docker container. It run tests on same server, using flag -v. I just use child_process to run tests and send all stdout to chat. And use silent_mode, which run tests like this: NODE_ENV=silent && yarn test. And in logger if statement turn off logs.
              <br /><br />
              Develop allure-reports hub. Using express js for backend (leaf-db for storing projects names) and reactjs + redux on fronend. I just unpack and generate report to folder with project name. And put it to static folder and it become routes for ui.
              <br /><br />
              Now I developing service for monitor devices in company.
              Using NestJS (db: postgresql) as backend and ReactJS (NextJS, redux-toolkit, rtk-query) for front. Links on code in the end.
            </Span>
          </div>
        </article>
        <article className={styles.article}>
          <div className={styles.workHistory}>
            <div>
              <div className={styles.periodBlock}>
                <H type={HTypeEnum.h5} className={styles.italicText}>
                  June 2014 —
                  <br />
                  february 2017
                </H>
                <H type={HTypeEnum.h3}>SimbirSoft</H>
                <H type={HTypeEnum.h4}>QA lead</H>
              </div>
            </div>
            <Span>
              My responsibilities:
              <ul className={styles.list}>
                <li>all kinds of testing: regression, functional, smoke, acceptance (exclude security);
                  automation testing;</li>
                <li>managing a team of 3 qa;</li>
                <li>testing FrontEnd and BackEnd;</li>
                <li>wrote test documentation: test cases, check lists, test plans, use cases and other;</li>
                <li>making estimates for testing;</li>
                <li>conducted interviews with candidates;</li>
                <li>trained interns and students.</li>
              </ul>
              <br />
              QA lead on bank services project.
              On this project we use manual and automation ui testing.
              Usages: java 7, selenium webdriver, junit/testng, jdbc, teamcity, allure.
              <br /><br />
              Lead of load testing project.
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
                  <br />
                  march 2013
                </H>
                <H type={HTypeEnum.h3}>ITECH.group</H>
                <H type={HTypeEnum.h4}>QA engineer</H>
              </div>
            </div>
            <Span>
              My responsibilities:
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
                  <br />
                  december 2010
                </H>
                <H type={HTypeEnum.h3}>SimTech</H>
                <H type={HTypeEnum.h4}>QA (intern)</H>
              </div>
            </div>
            <Span>
              My responsibilities:
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
          <div className={styles.exampleLink}>
            <H type={HTypeEnum.h5} className={styles.boldText}>Example of my Web UI tests on playwright</H>
            <a target="_blank" href={"https://github.com/Gorodb/playwright-example-tests"} rel="noreferrer">
              https://github.com/Gorodb/playwright-example-tests
            </a>
          </div>
          <div className={styles.exampleLink}>
            <H type={HTypeEnum.h5} className={styles.boldText}>My NestJS project</H>
            <a target="_blank" href={"https://github.com/Gorodb/nestjs-device-mon"} rel="noreferrer">
              https://github.com/Gorodb/nestjs-device-mon
            </a>
          </div>
          <div className={styles.exampleLink}>
            <H type={HTypeEnum.h5} className={styles.boldText}>My ReactJS project</H>
            <a target="_blank" href={"https://github.com/Gorodb/device-holders-front"} rel="noreferrer">
              https://github.com/Gorodb/device-holders-front
            </a>
          </div>
        </article>
        <article className={cn(styles.article)}>
          <H type={HTypeEnum.h2}>Contact Info</H>
          <div>
            <div className={styles.contact}>
              <i className={cn(styles.darkIcon, styles.phoneIcon)} />
              <Span>+7 (908) 485-69-87</Span>
            </div>
            <div className={styles.contact}>
              <i className={cn(styles.darkIcon, styles.emailIcon)} />
              <Span>rvakazov@gmail.com</Span>
            </div>
            <div className={styles.contact}>
              <i className={cn(styles.darkIcon, styles.addressIcon)} />
              <Span>St.Petersburg, Kollontai, 6/1</Span>
            </div>
          </div>
        </article>
      </footer>
    </div>
  )
}
