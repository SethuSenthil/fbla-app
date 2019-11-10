import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FBLA SBHS',
      home: Scaffold(
        appBar: AppBar(
          title: Text('FBLA SBHS'),
          backgroundColor: Color(0xFF00529B),
        ),
        body: WebView(
        initialUrl: 'https://4e87a556.ngrok.io/',
        javascriptMode: JavascriptMode.unrestricted,
        )
      ),
    );
  }
}