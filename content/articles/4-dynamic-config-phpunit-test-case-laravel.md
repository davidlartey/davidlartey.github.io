---
title: Dynamic Config Values for Each PHPUnit Test Case in Laravel

description: I am currently working on a USSD application that supports switching between different gateway providers at runtime by changing a configuration value. Testing each provider test case was simple and straight forward. I would update the value in my phpunit.xml file and off I go. However, I ran into problems when I wanted to run my entire test suite.
---

# Dynamic Config Values for Each PHPUnit Test Case in Laravel

### The Problem:
I am currently working on a USSD application that supports switching between different gateway providers at runtime by changing a configuration value.

Testing each provider test case was simple and straight forward. I would update the value in my phpunit.xml file and off I go. However, I ran into problems when I wanted to run my entire test suite.



### The Solution:
It turns out the solution is quite a simple one: Facades. Laravel allows one to mock any Facade when writing your tests. The documentation however, discourages from mocking the Config facade. Instead one should use the Config::set method.

So, I did something along the lines of the code below.

```php
<?php
// define your namespace and dependencies here

use Illuminate\Support\Facades\Config;

class GatewayProviderOneTest extends TestCase
{
	public function setUp ()
	{
		parent::setUp();
		Config::set("defaultGatewayProvider", "firstProvider");
	}

	// ... your test methods come here
}
```


That’s all I needed. Now GatewayProviderOneTest will run its assertions against the value set as the defaultGatewayProvider: firstProvider.

Additionally, you can revert this to a default value every time in your tearDown method. I however didn’t need to do this. 

