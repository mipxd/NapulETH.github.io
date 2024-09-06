import React, { useEffect } from 'react';

const ChatbotComponent = () => {
   

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/gh/mintventuresxyz/demochatembed/dist/web.js';
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            window.Chatbot.init({
                chatflowid: "74a936a0-1aa0-4f9e-be2c-90adcf66d4fa",
                apiHost: "https://llm.fana.ai",
                chatflowConfig: {
                    // topK: 2
                },
                theme: {
                    button: {
                        backgroundColor: "#ca75ab",
                        right: 16,
                        bottom: 16,
                        size: "medium",
                        iconColor: "white",
                        customIconSrc: "https://fanauploads.blob.core.windows.net/fanauploads/mingcute_chat-2-line.png",
                                                        },
                    chatWindow: {
                        showTitle: true, // show/hide the title bar
                        title: "NapulETH AI",
                        titleAvatarSrc: "https://fanauploads.blob.core.windows.net/fanauploads/napul-bot-avatar.png",
                        titleColor: "#ffffff", // This line sets the title color to white
                        welcomeMessage: "Hello! I'm NapulETH AI your web3 AI assistant, here to help you navigate the exciting world of NapulETH Open Village. How can I make your experience amazing today?",
                        backgroundColor: "#ffffff",
                        // height: 900,
                        // width: 400,
                        fontSize: 16,
                        poweredByTextColor: "#000000",
                        botMessage: {
                            backgroundColor: "#f7f8ff",
                            textColor: "#303235",
                            showAvatar: true,
                            avatarSrc: "https://fanauploads.blob.core.windows.net/fanauploads/napul-bot-avatar.png",
                        },
                        userMessage: {
                            backgroundColor: "#ca75ab",
                            textColor: "#ffffff",
                            size: "small",
                            showAvatar: false,
                            avatarSrc: "https://fanauploads.blob.core.windows.net/fanauploads/Napul_ETH_logo.png",
                        },
                        textInput: {
                            placeholder: "Ask me anything",
                            backgroundColor: "#ffffff",
                            textColor: "#303235",
                            sendButtonColor: "#ca75ab",
                        }
                    }
                }
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default ChatbotComponent;
