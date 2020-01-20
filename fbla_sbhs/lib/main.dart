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
        initialUrl: 'http://192.168.68.133:5500',
        javascriptMode: JavascriptMode.unrestricted,
        )
      ),
    );
  }
}