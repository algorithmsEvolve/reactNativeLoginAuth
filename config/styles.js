import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  ArticlesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  BGContainer: {
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emailAndPassword: {
    flex: 2,
  },
  container_EAP: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,.5)",
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 20,
  },
  Logo: {
    width: 150,
    height: 150,
  },
  errorText: {
    fontSize: 15,
    color: "red",
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  btn: {
    backgroundColor: "teal",
    padding: 15,
    borderRadius: 8,
  },
  articleContainer: {
    padding: 10,
    borderBottomColor: "rgba(255,255,255,.7)",
    borderBottomWidth: 5,
  },
  heading: {
    fontSize: 22,
    color: "black",
    marginBottom: 10,
  },
  content: {
    marginTop: 10,
    fontSize: 19,
  },
});
