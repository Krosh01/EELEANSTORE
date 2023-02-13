import React from "react";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
    return (
        <div className="App">
            <FloatingWhatsApp
                phoneNumber="123456789"
                accountName="Foo"
                allowEsc
                allowClickAway
                notification
                notificationSound
            />
        </div>
    );
}
