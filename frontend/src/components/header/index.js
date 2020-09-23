
import { h } from "preact";
import { Link } from "preact-router/match";
// import { Layout, Section } from "preact-layout";
import style from "./style.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';


import React, { Component } from 'react';
// import Dropdown from '@bit/react-bootstrap.react-bootstrap.dropdown';
// import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';


const Header = () => (
	<header class={style.header}>
		<img src="/assets/icons/Logo-with-text.png" />

		<Button variant="primary">Primary</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="primary" disabled>
			Disabled
      </Button>
		<Dropdown>
			<Dropdown.Toggle variant="success" id="dropdown-basic">asdfasdf
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>


		<Button variant="flat" size="xxl">
			flat button
  </Button>
		<nav>

			<Link activeClassName={style.active} href="/">
				Top Stories
	      </Link>
			<Link activeClassName={style.active} href="/profile">
				News for You
	      </Link>
			<Link activeClassName={style.active} href="/2">
				Most Recent
	      </Link>
			<Link activeClassName={style.active} href="/3">
				Corona Virus
	      </Link>
			<Link activeClassName={style.active} href="/4">
				Youth
	      </Link>
			<Link activeClassName={style.active} href="/5">
				Parents & Caregivers
	      </Link>

		</nav>
	</header>
);

export default Header;