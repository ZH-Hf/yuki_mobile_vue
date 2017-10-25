'use strict'
require('./check-versions')()
var querystring = require("querystring");
var bodyParser = require('body-parser'); //作为express的插件
const config = require('../config')
if(!process.env.NODE_ENV) {
	process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const fs = require("fs")
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
app.use(bodyParser.json()) //告诉express你使用了插件
app.use(bodyParser.urlencoded({

	extended: true
})) //处理通过表单提交的数据，放到req对象上面去了
//ajax-----------------------------------------------------------------------
app.post("/api/goodsList", function(req, res) {
	fs.readFile("src/assets/goodsList.json", function(err, data) {
		if(err) {
			return console.error(err);
		}
		var txt = data.toString();
		var obj = JSON.parse(txt);
		res.json({
			data: obj
		})
	})
})

app.post("/api/column", function(req, res) {
	fs.readFile("src/assets/goodsTwoList.json", function(err, data) {
		if(err) {
			return console.error(err);
		}
		var txt = data.toString();
		var obj = JSON.parse(txt);
		var typeId = req.body.typeId;
		res.json({
			data: obj[typeId]
		})
	})
})

const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: false,
	heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests--------------------------------------------------------
Object.keys(proxyTable).forEach(function(context) {
	let options = proxyTable[context]
	if(typeof options === 'string') {
		options = {
			target: options
		}
	}
	app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhostss:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
	_resolve = resolve
	_reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
	portfinder.getPort((err, port) => {
		if(err) {
			_reject(err)
		}
		process.env.PORT = port
		var uri = 'http://localhost:' + port
		console.log('> Listening at ' + uri + '\n')
		// when env is testing, don't need open it
		if(autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
			opn(uri)
		}
		server = app.listen(port)
		_resolve()
	})
})

module.exports = {
	ready: readyPromise,
	close: () => {
		server.close()
	}
}