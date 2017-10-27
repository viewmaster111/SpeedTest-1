'API Version 1.3.1

' Built using GeckoFX Read the Guide, for IE Control integration

Public Class BandwidthTest
    Private Sub BandwidthTest_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        GeckoWebBrowser1.Navigate("http://jdc20181.github.io/SpeedTest/Pages/Speedtest.html")
        AddHandler GeckoWebBrowser1.ProgressChanged, AddressOf Loading
        AddHandler GeckoWebBrowser1.DocumentCompleted, AddressOf Done
    End Sub
    Private Sub Loading(ByVal sender As Object, ByVal e As Gecko.GeckoProgressEventArgs)

        ProgressBar1.Maximum = e.MaximumProgress
        ProgressBar1.Value = e.MaximumProgress
        Me.Cursor = Cursors.AppStarting

    End Sub

    Private Sub Done(ByVal sender As Object, ByVal e As Gecko.Events.GeckoDocumentCompletedEventArgs)

        Me.Cursor = Cursors.Default
        Label1.Text = GeckoWebBrowser1.Document.GetElementById("progress").TextContent

    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        My.Computer.Clipboard.Clear()

        My.Computer.Clipboard.SetText(Label1.Text)

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Me.Close()

    End Sub
End Class
