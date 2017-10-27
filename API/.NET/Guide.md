# .NET SpeedTest API V. 1.3.1


**Prerequisites**

This guide assumes some knowledge, to convert from VB to C# you can use a converter. 


Windows 7 or newer

Visual Studio 2013 or newer

.NET 4.0 or newer

Webbrowser Control (NOTE: Upgrade is neccessary due to JS conflict with the older control version A class is provided below in setup)

Gecko Webbrowser Engine/Control (GeckoFX) (Available Via Nuget package)

**Getting Started**

Please be aware there is some extra steps depending on how you do certain things. 

 **You will need to use a **Windows Form Application** to use this API.**



- Adding Webbrowser/Gecko Control

**IE Control**

We will start with IE Webbrowser Control, please keep in mind you will need to upgrade the IE control using a class (linked below)

You can add the Control or load it dynamically at load time. 

Here is how you add it programically:

`Dim X as new webbrowser 
Me.Controls.Add(x)` 



 - For IE Control you will need to turn **ScriptErrorsSupressed** to True. 


Using the Control, you would Go to the properties menu and scroll to ScriptErrors property and set it to true.

[Image]: https://1drv.ms/i/s!ApbxWlyVVDT2h3WQMP_ZgDJl0fSP "ScriptErrorsSupressed Property"


Programically, you would just do:

`Webbrowser1.ScriptErrorsSuppressed = True`


I wrote an entire article with a class on how to upgrade the IE Control - Remember IE9+ is **REQUIRED** See that post [here](http://www.vbforums.com/showthread.php?838689-VB-NET-Upgrading-to-the-newest-IE-when-using-the-Webbrowser-Control&p=5105963#post5105963)

**Using Gecko**

Install using Nuget, add the references, then you can do the same way as the IE Control. Programically or using the control. 

Setup is easier with Gecko, JS is already enabled no hastles from here on. 


**Code**

You need a Label, and a ProgressBar on your form for the rest of the API. 

The API uses the webbrowser control to load the URL then load the HTML element into a label. It works the same way, as the SpeedTest website, with a progress bar and all. 

So do any neccessary initializing, and add this stuff to the Load Event:

I strongly reccomend Gecko, as that is what I used to write this all up and make it work, I will add some insights on how to use the IE control at the end. 

` GeckoWebBrowser1.Navigate("http://jdc20181.github.io/SpeedTest/API/api132.html")
        AddHandler GeckoWebBrowser1.ProgressChanged, AddressOf Loading
        AddHandler GeckoWebBrowser1.DocumentCompleted, AddressOf Done`
        
        
        NOTE: "api132" is the latest version, it will change when the version changes. 
        
The Rest of the API:

`Private Sub Loading(ByVal sender As Object, ByVal e As Gecko.GeckoProgressEventArgs)

        ProgressBar1.Maximum = e.MaximumProgress
        ProgressBar1.Value = e.MaximumProgress
        Me.Cursor = Cursors.AppStarting

    End Sub

    Private Sub Done(ByVal sender As Object, ByVal e As Gecko.Events.GeckoDocumentCompletedEventArgs)

        Me.Cursor = Cursors.Default
        Label1.Text = GeckoWebBrowser1.Document.GetElementById("progress").TextContent

    End Sub`
    
    
 **IE Control changes**
 
 Obviously, the first thing is remove the "Gecko" out of each of the references, and then change this line:
 
 `GeckoWebBrowser1.Document.GetElementById("progress").TextContent` to 
 
 `WebBrowser1.Document.GetElementById("progress").innertext`

The Rest is simple changes from `GeckoWebbrowser1` to `Webbrowser1`


**Full Source Code of the API including Add-on features will be in the SourceFile!**


